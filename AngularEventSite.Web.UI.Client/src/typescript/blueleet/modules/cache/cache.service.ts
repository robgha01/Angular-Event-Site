import { Inject, Injectable, forwardRef } from "@angular/core";
import { CookieService } from "angular2-cookie/core";
const storageAvailable = require("storage-available");

export enum CacheType {
    Session,
    Local,
    Cookie
}

export interface ICacheProvider {
    /**
     * Prefix for all cache keys
     */
    cachePrefix: string;

    /**
     * Suffix for the key name on the expiration items in localStorage
     */
    cacheSuffix: string;

    /**
     * Expiration date radix (set to Base-36 for most space savings)
     */
    expiryRadix: number;

    /**
     * Gets (and adds if necessary) an item from the cache with all of the default parameters
     * @param cacheKey
     * @param getCacheItem
     * @param expireDate
     * @param storageType
     */
    getCacheItem(cacheKey: string, getCacheItem: () => Promise<any>, expireDate?: Date): Promise<any>;

    insertCacheItem(cacheKey: string, getCacheItem: () => Promise<any>, expireDate?: Date): void;

    removeCacheItem(cacheKey: string): void;
}

export interface ICacheService {
    sessionCache: SessionStorageCacheProvider;
    localCache: LocalStorageCacheProvider;
    cookieCache: CookieCacheService;

    /**
     * Gets (and adds if necessary) an item from the cache with all of the default parameters
     * @param cacheKey
     * @param getCacheItem
     * @param expireDate
     * @param storageType
     */
    getCacheItem(cacheKey: string, getCacheItem: () => Promise<any>, cacheType?: CacheType, expireDate?: Date): Promise<any>;

    insertCacheItem(cacheKey: string, getCacheItem: () => Promise<any>, cacheType?: CacheType, expireDate?: Date): void;
}

export abstract class CacheProviderBase implements ICacheProvider {
    /**
     * Prefix for all cache keys
     */
    cachePrefix: string = "bl-";

    /**
     * Suffix for the key name on the expiration items in localStorage
     */
    cacheSuffix: string = "-cacheExpiration";

    /**
     * Expiration date radix (set to Base-36 for most space savings)
     */
    expiryRadix: number = 10;

    /**
     * Gets (and adds if necessary) an item from the cache with all of the default parameters
     * @param cacheKey
     * @param getCacheItem
     * @param expireDate
     * @param storageType
     */
    abstract getCacheItem(cacheKey: string, getCacheItem: () => Promise<any>, expireDate?: Date): Promise<any>;

    abstract insertCacheItem(cacheKey: string, getCacheItem: () => Promise<any>, expireDate?: Date): void;

    abstract removeCacheItem(cacheKey: string): void;
}

export abstract class WindowStorageCacheProviderBase extends CacheProviderBase {
    isSupported: boolean;

    constructor(protected storage: Storage, protected storageSupported: boolean) {
        super();

        this.isSupported = storageSupported;
    }

    getCacheItem(cacheKey: string, getCacheItem: () => Promise<any>, expireDate?: Date): Promise<any> {
        if (this.storageSupported === false) {
            return Promise.resolve(null);
        }

        const item = this.storage.getItem(cacheKey);
        if (item === null) {
            return getCacheItem().then(value => {
                let entry = { data: value, expire: expireDate };
                this.storage.setItem(cacheKey, JSON.stringify(entry));

                return value;
            });
        }

        try {
            let entry = JSON.parse(item);

            /* return entry as is if not expired. */
            if (!entry.data && !entry.expire) {
                return Promise.resolve(entry);
            }

            const { data, expire } = entry;
            const now = new Date();
            const expiration = new Date(expire);

            if (expire !== -1 && now.getTime() > expiration.getTime()) {
                this.storage.removeItem(cacheKey);

                return getCacheItem().then(value => {
                    entry = { data: value, expire: expireDate };
                    this.storage.setItem(cacheKey, JSON.stringify(entry));

                    return value;
                });
            }

            return Promise.resolve(data);
        } catch (e) {
            /* return item as is if not an object. */
            return Promise.resolve(item);
        }
    }

    insertCacheItem(cacheKey: string, getCacheItem: () => Promise<any>, expireDate?: Date): void {
        if (this.storageSupported === false) {
            return;
        }

        getCacheItem().then(value => {
            const entry = { data: value, expire: expireDate };
            window.sessionStorage.setItem(cacheKey, JSON.stringify(entry));

            return value;
        });
    }

    removeCacheItem(cacheKey: string): void {
        if (this.storageSupported === false) {
            return;
        }

        this.storage.removeItem(cacheKey);
    }
}

@Injectable()
export class CacheService implements ICacheService {
    sessionCache: SessionStorageCacheProvider;
    localCache: LocalStorageCacheProvider;
    cookieCache: CookieCacheService;

    constructor(
        @Inject(forwardRef(() => SessionStorageCacheProvider)) sessionCache: SessionStorageCacheProvider,
        @Inject(forwardRef(() => LocalStorageCacheProvider)) localCache: LocalStorageCacheProvider,
        @Inject(forwardRef(() => CookieCacheService)) cookieCache: CookieCacheService) {
        this.sessionCache = sessionCache;
        this.localCache = localCache;
        this.cookieCache = cookieCache;
    }

    getCacheItem(cacheKey: string, getCacheItem: () => Promise<any>, cacheType: CacheType = CacheType.Session, expireDate?: Date): Promise<any> {
        if (cacheType === CacheType.Local && this.localCache.isSupported) {
            return this.localCache.getCacheItem(cacheKey, getCacheItem, expireDate);
        } else if (cacheType === CacheType.Session && this.sessionCache.isSupported) {
            return this.sessionCache.getCacheItem(cacheKey, getCacheItem, expireDate);
        } else {
            return this.cookieCache.getCacheItem(cacheKey, getCacheItem, expireDate);
        }
    }

    insertCacheItem(cacheKey: string, getCacheItem: () => Promise<any>, cacheType: CacheType = CacheType.Session, expireDate?: Date): void {
        if (cacheType === CacheType.Local && this.localCache.isSupported) {
            return this.localCache.insertCacheItem(cacheKey, getCacheItem, expireDate);
        } else if (cacheType === CacheType.Session && this.sessionCache.isSupported) {
            return this.sessionCache.insertCacheItem(cacheKey, getCacheItem, expireDate);
        } else {
            return this.cookieCache.insertCacheItem(cacheKey, getCacheItem, expireDate);
        }
    }
}

@Injectable()
export class SessionStorageCacheProvider extends WindowStorageCacheProviderBase {
    constructor( @Inject(CookieService) protected cookieService: CookieService) {
        super(window.sessionStorage, storageAvailable("sessionStorage"));
    }
}

@Injectable()
export class LocalStorageCacheProvider extends WindowStorageCacheProviderBase {
    constructor( @Inject(CookieService) protected cookieService: CookieService) {
        super(window.localStorage, storageAvailable("localStorage"));
    }
}

@Injectable()
export class CookieCacheService extends CacheProviderBase {
    constructor( @Inject(CookieService) protected cookieService: CookieService) {
        super();
    }

    getCacheItem(cacheKey: string, getCacheItem: () => Promise<any>, expireDate: Date = null): Promise<any> {
        let item = this.cookieService.getObject(`${this.cachePrefix}:${cacheKey}`);
        if (item === undefined || item === null) {
            return getCacheItem().then(value => {
                if (expireDate) {
                    this.cookieService.putObject(`${this.cachePrefix}:${cacheKey}`, value, { expires: expireDate });
                } else {
                    this.cookieService.putObject(`${this.cachePrefix}:${cacheKey}`, value);
                }

                return value;
            });
        }

        return Promise.resolve(item);
    }

    insertCacheItem(cacheKey: string, getCacheItem: () => Promise<any>, expireDate: Date = null): void {
        getCacheItem().then(value => {
            if (expireDate) {
                this.cookieService.putObject(`${this.cachePrefix}:${cacheKey}`, value, { expires: expireDate });
            } else {
                this.cookieService.putObject(`${this.cachePrefix}:${cacheKey}`, value);
            }
        });
    }

    removeCacheItem(cacheKey: string): void {
        this.cookieService.remove(`${this.cachePrefix}:${cacheKey}`);
    }
}
