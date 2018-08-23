import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslatorService } from "./translator.service";
import { CacheModule } from "../cache/module";

@NgModule({
    imports: [CommonModule, CacheModule],
    exports: [CacheModule],
    declarations: [],
    providers: [TranslatorService]
})
export class LanguageModule {}
