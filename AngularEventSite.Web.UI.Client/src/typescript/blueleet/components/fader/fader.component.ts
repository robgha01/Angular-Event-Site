import { Component, Input, trigger, state, animate, transition, style, keyframes } from "@angular/core";

@Component({
    selector: "bl-fader",
    animations: [
        trigger("visibilityChanged", [
            state("true", style({ opacity: 1 })),
            state("false", style({ opacity: 0 })),
            transition("1 => 0", animate(300, keyframes([
                style({ "opacity": "1" }),
                style({ "opacity": "0.7" }),
                style({ "opacity": "0" })
            ]))),
            transition("0 => 1", animate(300, keyframes([
                style({ "opacity": "0" }),
                style({ "opacity": "0.7" }),
                style({ "opacity": "1" })
            ])))
        ])
    ],
    template: `
      <div [@visibilityChanged]="isVisible" >
        <ng-content></ng-content>
      </div>
  `
})
export class FaderComponent {
    @Input() isVisible: boolean = true;
}
