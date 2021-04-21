import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

interface IErrors {
  required: string;
  maxlength: string;
}

@Component({
  selector: 'app-input-page',
  templateUrl: './input-page.component.html',
  styleUrls: ['./input-page.component.scss']
})
export class InputPageComponent {

  get errors(): string[] {
    const errorMessages: IErrors = {
      required: 'Please fill in the field',
      maxlength: 'The value exceeds the allowed number of characters'
    };
 
    if (this.control.errors !== null) {
      return Object.keys(this.control.errors).map((error) => errorMessages[error as keyof IErrors]);
    }

    return [];
  }

  control = new FormControl(null, [Validators.required, Validators.maxLength(10)]);

}
