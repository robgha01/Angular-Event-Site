import { AbstractControl, AsyncValidatorFn } from "@angular/forms";
import * as Rx from "rxjs/Rx";

/**
 * Async validator that debounce's
 */
export class AsyncObservableValidator {
    static create(callback: (value: any) => Promise<any>, debounceTime: number = 1000): AsyncValidatorFn {
        let changed$ = new Rx.Subject<any>();
        return (control: AbstractControl): Rx.Observable<any | null> => {
            changed$.next(); // This will signal the previous stream (if any) to terminate.
            return control.valueChanges
                .takeUntil(changed$)
                .take(1)
                .debounceTime(debounceTime, Rx.Scheduler.async)
                .switchMap(value => {
                    return callback(value);
                });
        };
    };
}
