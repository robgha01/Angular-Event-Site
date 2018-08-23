/* tslint:disable */
import { Component, AfterViewInit, ContentChild, TemplateRef } from "@angular/core";

@Component({
    selector: "app-root",
    template: `<ng-template [ngTemplateOutlet]="this.appTemplate" [ngOutletContext]="{ $implicit: this }"></ng-template><router-outlet></router-outlet>`,
})
export class RootAppComponent implements AfterViewInit {
    @ContentChild(TemplateRef) appTemplate: TemplateRef<any>;
    ngAfterViewInit(): void {}
}

@Component({
    selector: "app", // this will ensure that angular controlls the whole page with only one root component.
    template: (<any>document).getElementById("mainAppContent").innerText // Currently we have no way of using existing html as per to https://github.com/angular/angular/issues/1858 so we use this hack.
})
export class AppComponent implements AfterViewInit {
    ngAfterViewInit(): void {}
}
