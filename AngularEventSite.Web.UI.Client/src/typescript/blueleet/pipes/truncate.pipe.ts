import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "truncate" })
export class TruncatePipe implements PipeTransform {
    transform(value: string, args: string[]): string {
        let limit: any;
        if (Object.isNullOrUndefined(args.length)) {
            limit = args;
        } else if (args.length > 0) {
            limit = parseInt(args[0], 10);
        } else {
            limit = 10;
        }

        let trail: string;
        if (args.length > 1) {
            trail = args[1];
        } else {
            trail = "...";
        }

        if (value.length > limit) {
            return value.substring(0, limit) + trail;
        }

        return value;
    }
}
