import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "log" })
export class LogPipe implements PipeTransform {
    transform(value: string): any {
        if (!value) {
            console.log("[LogPipe]: value is:");
            console.log(value);
            return value;
        }

        console.log("[LogPipe]: value is null");

        return value;
    }
}
