import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import * as bl from "../../blueleet";

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, bl.BlueLeetUmbracoModule.forRoot(), bl.LanguageModule],
    exports: [],
    declarations: []
})
export class WidgetModule { }
