import { Observable } from "rxjs/Observable";
import { AbstractControl } from "@angular/forms";

/**
 * @params observable ObservableValidatorFn takes an Observable<AbstractControl> that emits when the
 * form control (AbstractControl) should be validated.
 *
 * @return ObservableValidatorFn returns an Observable<any> that emits the validation result.
 */
export interface IObservableValidatorFn {
    (observable: Observable<AbstractControl>): Observable<any>;
}
