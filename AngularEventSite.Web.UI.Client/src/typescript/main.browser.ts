import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./main.bootstraper";
import { Env } from "./dev-helpers";

if (Env.isProd()) {
    enableProdMode();
}

export function main() {
    return platformBrowserDynamic().bootstrapModule(AppModule, { useDebug: Env.isDev() });
}

if (document.readyState === "complete") {
    main();
} else {
    (<any>document).addEventListener("DOMContentLoaded", main);
}

// Import assets.
import "./../assets/stylesheets/ie10-viewport-bug-workaround.css";
import "./../assets/images/favicon.jpg";
import "./../assets/images/clock-preview.png";

// Module assets
import "angular2-busy/build/style/busy.css";
