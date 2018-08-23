import { Injectable } from "@angular/core";
import { AbstractControl, ValidatorFn, AsyncValidatorFn, Validators } from "@angular/forms";
import { CustomValidators } from "ng2-validation";
import * as Rx from "rxjs/Rx";
import { UmbracoAjaxService } from "./blueleet/umbraco-ajax-Service";
import { PasswordVerdict } from "./enums/password-verdict";
import { AsyncObservableValidator } from "./blueleet/Validator/AsyncObservableValidator";
import { IPayload } from "./abstraction/IPayload";
import { GenericMessages } from "./enums/generic-messages-enum";
const zxcvbn = require("zxcvbn");
const _ = require("lodash");

@Injectable()
export class ValidationService implements CustomValidators {
    private static passwordStrengthChange = new Rx.Subject<any>();
    private static validatorErrorMessages: any = null;

    static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
        const getErrorMessage = (fallback: string) => {
            if (validatorName === "weakPassword") {
                if (!Object.isNullOrUndefined(validatorValue.strength.feedback.warning)) {
                    return validatorValue.strength.feedback.warning;
                }
            }

            let compiledValue = _.template(fallback)(validatorValue);
            return compiledValue;
        };

        if (validatorName === "creditCard") {
            validatorName = "invalidCreditCard";
        }

        const configValue = getErrorMessage(this.validatorErrorMessages[validatorName]);
        return configValue;
    }

    static passwordValidator(minLength: number): ValidatorFn {
        return (control): any => {
            const strength = zxcvbn(control.value);
            this.passwordStrengthChange.next(strength);
            let length = control.value ? control.value.length : 0;
            if (length < minLength) {
                return { invalidPasswordLength: { requiredLength: minLength, actualLength: length } };
            }

            if (strength.score < 3) {
                return { weakPassword: { strength: strength } };
            }

            return null;
        };
    }

    /**
    * Validator that requires controls to have a value of a range length.
    */
    static rangeLength(rangeLength: Array<number>): ValidatorFn {
        return CustomValidators.rangeLength(rangeLength);
    }

    /**
    * Validator that requires controls to have a value of a min value.
    */
    static min(min: number): ValidatorFn {
        return Validators.minLength(min);
    }

    /**
    * Validator that requires controls to have a value of a max value.
    */
    static max(max: number): ValidatorFn {
        return Validators.maxLength(max);
    }

    /**
    * Validator that requires controls to have a value of a range value.
    */
    static range(range: Array<number>): ValidatorFn {
        return CustomValidators.range(range);
    }

    /**
    * Validator that requires controls to have a value of digits.
    */
    static digits(control: AbstractControl): { [key: string]: boolean } {
        return CustomValidators.digits(control);
    }

    /**
    * Validator that requires controls to have a value of number.
    */
    static number(control: AbstractControl): { [key: string]: boolean } {
        return CustomValidators.number(control);
    }

    /**
    * Validator that requires controls to have a value of url.
    */
    static url(control: AbstractControl): { [key: string]: boolean } {
        return CustomValidators.url(control);
    }

    /**
    * Validator that requires controls to have a value of email.
    */
    static email(control: AbstractControl): { [key: string]: boolean } {
        return CustomValidators.email(control);
    }

    /**
    * Validator that requires controls to have a value of date.
    */
    static date(control: AbstractControl): { [key: string]: boolean } {
        return CustomValidators.date(control);
    }

    /**
    * Validator that requires controls to have a value of minDate.
    */
    static minDate(minDate: any): ValidatorFn {
        return CustomValidators.minDate(minDate);
    }

    /**
    * Validator that requires controls to have a value of maxDate.
    */
    static maxDate(maxDate: any): ValidatorFn {
        return CustomValidators.maxDate(maxDate);
    }

    /**
    * Validator that requires controls to have a value of dateISO.
    */
    static dateISO(control: AbstractControl): { [key: string]: boolean } {
        return CustomValidators.dateISO(control);
    }

    /**
    * Validator that requires controls to have a value of creditCard.
    */
    static creditCard(control: AbstractControl): { [key: string]: boolean } {
        return CustomValidators.creditCard(control);
    }

    /**
    * Validator that requires controls to have a value of JSON.
    */
    static json(control: AbstractControl): { [key: string]: boolean } {
        return CustomValidators.json(control);
    }

    /**
    * Validator that requires controls to have a value of base64.
    */
    static base64(control: AbstractControl): { [key: string]: boolean } {
        return CustomValidators.base64(control);
    }

    /**
    * Validator that requires controls to have a value of phone.
    */
    static phone(locale?: string): ValidatorFn {
        // ToDo: implament phone for sweden local.
        return CustomValidators.phone(locale);
    }

    /**
    * Validator that requires controls to have a value of uuid.
    */
    static uuid(version?: string): ValidatorFn {
        return CustomValidators.uuid(version);
    }

    /**
    * Validator that requires controls to have a value to equal another value.
    */
    static equal(val: any): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
            if (!Object.isNullOrUndefined(Validators.required(control))) {
                return null;
            }

            let v: any = control.value;

            return val === v ? null : { equal: { equalValue: val } };
        };
    }

    /**
    * Validator that requires controls to have a value to equal another control.
    */
    static equalTo(equalControl: AbstractControl, thisControlName: string, equalControlName: string): ValidatorFn {
        let subscribe: boolean = false;
        return (control: AbstractControl): { [key: string]: any } => {
            if (!subscribe) {
                subscribe = true;
                equalControl.valueChanges.subscribe(() => {
                    control.updateValueAndValidity();
                });
            }

            let v: string = control.value;

            return equalControl.value === v ? null : { equalTo: { thisControlName: thisControlName, equalControlName: equalControlName } };
        };
    }

    constructor(umbracoAjaxService: UmbracoAjaxService) {
        if (ValidationService.validatorErrorMessages === null) {
            umbracoAjaxService.post("TranslationHelper", "GetValidationServiceMessagesPost")
                .then((value) => {
                    ValidationService.validatorErrorMessages = value;
                });
        }
    }

    pattern(p: RegExp, message: string): ValidatorFn {
        return (control: AbstractControl): { patternInvalidValue: { message: string } } => {
            if (p.test(control.value)) {
                return { patternInvalidValue: { message: message } };
            }

            return null;
        };
    }

    usernameValidator(umbracoAjaxService: UmbracoAjaxService): AsyncValidatorFn {
        return AsyncObservableValidator.create(value => {
            return umbracoAjaxService.post("MemberSurface", "ValidateUsernamePost", { username: value })
                .then((v: IPayload) => {
                    if (v.hasOwnProperty("messageType") && v.messageType === GenericMessages.Danger) {
                        return { invalidUsername: v.message };
                    }
                    if (v) {
                        return { usernameTaken: true };
                    } else {
                        return null;
                    }
                });
        });
    }

    emailValidator(umbracoAjaxService: UmbracoAjaxService): AsyncValidatorFn {
        return AsyncObservableValidator.create(value => {
            return umbracoAjaxService.post("MemberSurface", "ValidateEmailPost", { email: value })
                .then((v: IPayload) => {
                    if (v) {
                        return { emailAlreadyRegistered: true };
                    } else {
                        return null;
                    }
                });
        });
    }

    onPasswordStrengthChange(): Rx.Observable<any> {
        return ValidationService.passwordStrengthChange.asObservable();
    }

    getPasswordVerdict(score: number, verdict = PasswordVerdict): { message: string, passwordVerdict: PasswordVerdict } {
        if (score === 0 || score === verdict.Weak) {
            return { message: PasswordVerdict[PasswordVerdict.Weak], passwordVerdict: PasswordVerdict.Weak };
        } else if (score === verdict.Normal) {
            return { message: PasswordVerdict[PasswordVerdict.Normal], passwordVerdict: PasswordVerdict.Normal };
        } else if (score === verdict.Medium) {
            return { message: PasswordVerdict[PasswordVerdict.Medium], passwordVerdict: PasswordVerdict.Medium };
        } else if (score === verdict.Strong) {
            return { message: PasswordVerdict[PasswordVerdict.Strong], passwordVerdict: PasswordVerdict.Strong };
        } else if (score <= PasswordVerdict.VeryStrong) {
            return { message: "Very Strong", passwordVerdict: PasswordVerdict.VeryStrong };
        }

        return null;
    }
}
