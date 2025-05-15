import { AbstractControl, ValidationErrors } from "@angular/forms";

export function nonNumbersValidator(control: AbstractControl): ValidationErrors | null{
     let test = /\d/.test(control.value);
     return test?null: { noNumbers: true };
} 