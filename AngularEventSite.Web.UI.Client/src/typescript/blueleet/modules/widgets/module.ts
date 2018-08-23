import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WidgetClockComponent } from "./widget-clock/widget-clock.component";

@NgModule({
    imports: [CommonModule],
    exports: [WidgetClockComponent],
    declarations: [WidgetClockComponent]
})
export class WidgetsModule { }
