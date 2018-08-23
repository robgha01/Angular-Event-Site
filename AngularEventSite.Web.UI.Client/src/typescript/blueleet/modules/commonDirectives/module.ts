import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FocuserDirective } from "./focus.directive";
import { ScrollToDirective } from "./scrollTo.directive";
import { WaypointStickyDirective } from "./waypointSticky.directive";
import { ShowAtScrollDirective } from "./showAtScroll.directive";

@NgModule({
    imports: [CommonModule],
    exports: [FocuserDirective, ScrollToDirective, WaypointStickyDirective, ShowAtScrollDirective],
    declarations: [FocuserDirective, ScrollToDirective, WaypointStickyDirective, ShowAtScrollDirective]
})
export class CommonDirectivesModule { }
