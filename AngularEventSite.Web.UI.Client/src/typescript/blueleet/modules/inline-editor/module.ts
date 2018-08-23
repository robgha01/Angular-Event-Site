import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { SelectModule } from "ng2-select-compat";
import { AlertModule } from "ngx-bootstrap/alert";
import { ModalModule } from "ngx-bootstrap/modal";
import * as index from "./index";
import { CommonDirectivesModule } from "../commonDirectives/module";
const configs = index.inizialize();

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, CommonDirectivesModule, SelectModule, AlertModule.forRoot(), ModalModule.forRoot()],
    exports: configs.exports,
    declarations: configs.editors
})
export class InlineEditorModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: InlineEditorModule,
            providers: configs.editorProviders
        };
    }
}
