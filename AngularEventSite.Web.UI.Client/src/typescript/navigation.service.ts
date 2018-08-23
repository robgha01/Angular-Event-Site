import { Injectable, Inject, NgZone } from "@angular/core";
import { Router } from "@angular/router";
const pace = require("pace-progress");

@Injectable()
export class NavigationService {
    constructor(
        @Inject(Router) private router: Router,
        @Inject(NgZone) private ngZone: NgZone
    ) {
    }

    navigate(url: string, paceUnload: boolean = true): void {
        const self = this;
        
        self.router.navigateByUrl(url);
        self.reload(paceUnload);
    }

    reload(paceUnload: boolean = true): void {
        const self = this;

        window.onbeforeunload = () => {
            pace.stop();
            pace.bar.render();
        };

        self.ngZone.runOutsideAngular(() => {
            window.location.reload();
        });
    }
}
