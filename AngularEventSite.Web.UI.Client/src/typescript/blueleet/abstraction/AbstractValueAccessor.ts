import { forwardRef } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import * as Rx from "rxjs/Rx";

export abstract class AbstractValueAccessor implements ControlValueAccessor {
    private _onValueChange: Rx.Subject<any> = new Rx.Subject();
    onValueChange = this._onValueChange.asObservable();

    protected $value$: any = "";
    get value(): any { return this.$value$; };
    set value(v: any) {
        if (v !== this.$value$) {
            this.$value$ = v;
            this._onValueChange.next(v);
            this.onChange(v);
        }
        if (!this.$preValue$) {
            this.$preValue$ = this.$value$;
        }
    }

    protected $preValue$: any = null;
    get preValue(): any {
        if (!this.$preValue$) {
            this.$preValue$ = this.$value$;
        }

        return this.$preValue$;
    };

    writeValue(value: any) {
        this.value = value;
    }

    onChange(_): void { };
    onTouched(): void { };

    registerOnChange(fn: (_: any) => void): void {
        this.onChange = fn;
    }
    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }
}

export function MakeProvider(type: any): any {
    return { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => type), multi: true };
}
