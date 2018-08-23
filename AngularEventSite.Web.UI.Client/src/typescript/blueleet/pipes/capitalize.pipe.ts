import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "Capitalize" })
export class CapitalizePipe implements PipeTransform {
    transform(value: string): any {
        if (!value) {
            return value;
        }

        return value.replace(/\w\S*/g, txt => (txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()));
    }
}
