import { Inject, Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import * as Rx from "rxjs/Rx";
import { CookieService } from "angular2-cookie/core";

@Injectable()
export class ConfigService {
    siteConstants: any = {};
    localStore: any = {};
    url: string;
    cookieKey: string = "configsKey";
    localStorageKey = `${this.cookieKey}:localStorage`;
    useCookieStore: boolean = true;
    loadingInProgress: boolean = false;

    private configSubject = new Rx.BehaviorSubject(null);
    private configObservable = this.configSubject.asObservable();

    constructor( @Inject(Http) protected $http: Http,
        @Inject(Window) protected window,
        @Inject(CookieService) protected cookieService: CookieService) {
        this.url = window.location.protocol + "//" + window.location.host + "/" + "umbraco/surface/configsurface/index";
    }

    getCookieConfigs(): Object {
        if (this.useCookieStore) {
            const cookieValue = this.cookieService.getObject(this.cookieKey);

            if (cookieValue) {
                return cookieValue;
            }
        }

        return null;
    }

    setCookieConfigs(data: any): void {
        if (this.useCookieStore) {
            let expireDate = new Date();
            expireDate.setMinutes(expireDate.getMinutes() + 30);
            this.cookieService.putObject(this.cookieKey, data, { expires: expireDate });
        }
    }

    ensureConfigs(): Promise<any> {
        let tryGetCookie = this.getCookieConfigs();

        if (tryGetCookie != null) {
            return new Promise((resolve) => {
                resolve(tryGetCookie);
            });
        }

        if (Object.keys(this.siteConstants).length) {
            return new Promise((resolve) => {
                resolve(this.siteConstants);
            });
        }

        // No siteConstants found, load them.
        if (!this.loadingInProgress) {
            this.loadingInProgress = true;

            let observable = this.$http.post(this.url, null)
                .finally(() => this.loadingInProgress = false)
                .map((res: Response) => {
                    return res.json();
                }).toPromise().then(configs => {
                    // Assign the configuration keys with the correct properties from the server.
                    let keys = Object.keys(configs);
                    let values = Object.values(configs);

                    keys.forEach((key, i) => {
                        let value = values[i];
                        this.siteConstants[key] = value;
                    });

                    this.setCookieConfigs(this.siteConstants);
                    this.configSubject.next(this.siteConstants);

                    return this.siteConstants;
                });

            return observable;
        }

        return this.configObservable.toPromise();
    }

    getLocalConfig(key): any {
        return this.localStore[key];
    }

    addLocalConfig(key, value): void {
        let tryGetValue = this.getLocalConfig(key);
        if (tryGetValue) {
            this.localStore[key] = value;
        }
    };

    setLocalConfig(key, value): void {
        this.localStore[key] = value;
    }
}
