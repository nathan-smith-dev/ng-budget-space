import { AbstractControl } from '@angular/forms';

export class AppValidators {
    static postiveNumeric (control: AbstractControl) {
        if(typeof control.value !== 'number') {
            return { nonNumber: true };
        }
        if(control.value < 0) {
            return { lessThanZero: true }
        }

        return null;
    }
}
