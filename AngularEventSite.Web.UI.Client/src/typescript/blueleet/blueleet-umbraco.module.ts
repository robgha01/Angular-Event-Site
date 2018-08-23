import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CookieService } from "angular2-cookie/core";
import { UmbracoAjaxService } from "./umbraco-ajax-Service";
import { ConfigService } from "./config.service";
import { BroadcasterService } from "./broadcaster.service";
import { ServiceEvent } from "./ServiceEvent.service";
import { InlineEditorModule } from "./modules/inline-editor/module";
import { CapitalizePipe } from "./pipes/capitalize.pipe";
import { ReactiveFormsModule } from "@angular/forms";
import { TruncatePipe } from "./pipes/truncate.pipe";
import { FaderComponent } from "./components/fader/fader.component";
import { PaceProgressComponent } from "./components/load-indicator/pace-progress.component";

@NgModule({
    imports: [CommonModule, HttpModule, BrowserAnimationsModule, ReactiveFormsModule, InlineEditorModule],
    exports: [TruncatePipe, CapitalizePipe, FaderComponent, PaceProgressComponent, InlineEditorModule],
    declarations: [TruncatePipe, CapitalizePipe, FaderComponent, PaceProgressComponent]
})
export class BlueLeetUmbracoModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: BlueLeetUmbracoModule,
            providers: [CookieService, TruncatePipe, CapitalizePipe, BroadcasterService, UmbracoAjaxService, ConfigService, ServiceEvent]
        };
    }
}
