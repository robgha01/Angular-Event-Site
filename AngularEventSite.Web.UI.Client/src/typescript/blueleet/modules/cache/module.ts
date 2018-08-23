import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CacheService, SessionStorageCacheProvider, LocalStorageCacheProvider, CookieCacheService } from "./cache.service";

@NgModule({
    imports: [CommonModule],
    exports: [],
    providers: [CacheService, SessionStorageCacheProvider, LocalStorageCacheProvider, CookieCacheService]
})
export class CacheModule { }
