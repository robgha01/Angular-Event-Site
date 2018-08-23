import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes, ExtraOptions } from "@angular/router";
import { Env } from "./dev-helpers";

// ToDo: separate below code into own modules and import for better readability.

// Valor imports
import { AlertModule } from "ngx-bootstrap/alert";
import { ModalModule } from "ngx-bootstrap/modal";
import { ButtonsModule } from "ngx-bootstrap/buttons";
import { PopoverModule } from "ngx-bootstrap/popover";
import { window } from "ngx-bootstrap/utils/facade/browser";

// Application specific imports
import { RootAppComponent, AppComponent } from "./main.app";
import { IconColorDirective } from "./icon-color.directive";
import { LogPipe } from "./log.pipe";
import { DetectDeviceService } from "./detectDevice.service";
import { WidgetSearchDirective } from "./widget-search.directive";
import { WidgetQuickNavigatorComponent } from "./components/widget-quickNavigator/widget-quickNavigator.component";
import { LoginSignupComponent } from "./components/login-signup/login-signup.component";
import { LoginEventService } from "./loginEvent.service";
import { LoginSignupCompleteComponent } from "./components/login-signup/login-signup-complete.component";
import { SearchBoxComponent } from "./components/search-box/search-box.component";
import { SimpleLoginComponent } from "./components/simple-login/simple-login.component";
import { UserService } from "./user.service";
import { SimpleSignUpComponent } from "./components/simple-signup/simple-signup.component";
import { BootstrapFormInputComponent } from "./components/bootstrap/form-input.component";
import { BootstrapAlertBoxComponent } from "./components/bootstrap/alert-box/alert-box.component";
import { ValidationService } from "./validation.service";
import { ForgotPasswordComponent } from "./components/forgot-password/forgot-password.component";
import { SignoutComponent } from "./components/login-signup/signout.component";
import { HoverableGroupDirective, HoverableDirective } from "./hoverable.directive";
import { HoverableEventService } from "./hoverableEvent.service";
import { IfAdminDirective, IfAdminAndDirective } from "./if-admin.directive";
import { SearchWallComponent, SearchEmptyComponent } from "./components/search-wall/search-wall.component";
import * as bl from "./blueleet/";
import {AlertBoxService} from "./alert-box.service";
import {EventComponent} from "./components/event/event.component";
import {EventCodeComponent} from "./components/event/code.component";

// Configure ngx-bootstrap
window.__theme = "bs4";

// ToDo: Refactor
const appRoutes: Routes = [
    { path: "**", component: AppComponent } // This matches all routes
];

const extraRouteOpts: ExtraOptions = {
    enableTracing: false
}

if (Env.isDev()) {
    extraRouteOpts.enableTracing = true;
}

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, extraRouteOpts),
        BrowserModule,
        HttpModule,
        ReactiveFormsModule,
        bl.CommonDirectivesModule,
        bl.WidgetsModule,
        bl.BlueLeetUmbracoModule.forRoot(),
        bl.InlineEditorModule.forRoot(),
        bl.SearchModule.forRoot(),
        bl.LanguageModule,
        AlertModule.forRoot(),
        ModalModule.forRoot(),
        ButtonsModule.forRoot(),
        PopoverModule.forRoot()
    ],
    declarations: [
        LogPipe,
        RootAppComponent,
        AppComponent,
        HoverableGroupDirective,
        HoverableDirective,
        IconColorDirective,
        WidgetSearchDirective,
        IfAdminDirective,
        IfAdminAndDirective,
        WidgetQuickNavigatorComponent,
        LoginSignupComponent,
        LoginSignupCompleteComponent,
        SimpleLoginComponent,
        SimpleSignUpComponent,
        ForgotPasswordComponent,
        SearchBoxComponent,
        BootstrapFormInputComponent,
        BootstrapAlertBoxComponent,
        SignoutComponent,
        SearchWallComponent,
        SearchEmptyComponent,
        EventComponent,
        EventCodeComponent
    ],
    providers: [
        { provide: Window, useValue: window },
        DetectDeviceService,
        UserService,
        LoginEventService,
        ValidationService,
        HoverableEventService,
        AlertBoxService
    ],
    bootstrap: [RootAppComponent]
})
export class AppModule {
}