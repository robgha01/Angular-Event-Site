import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SearchComponent } from "./search.component";
import { SearchService } from "./search.service";
import { BlueLeetUmbracoModule } from "../../blueleet-umbraco.module";

@NgModule({
    imports: [CommonModule, BlueLeetUmbracoModule],
    exports: [BlueLeetUmbracoModule, SearchComponent],
    declarations: [SearchComponent]
})
export class SearchModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SearchModule,
            providers: [SearchService]
        };
    }
}
