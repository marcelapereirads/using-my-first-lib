import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

interface Errors {
  required: string;
  maxlength: string;
}

@Component({
  selector: 'app-input-page',
  templateUrl: './input-page.component.html',
})
export class InputPageComponent {
  get errors(): string[] {
    const errorMessages: Errors = {
      required: 'Please fill in the field',
      maxlength: 'The value exceeds the allowed number of characters',
    };

    if (this.control.errors !== null) {
      return Object.keys(this.control.errors).map(
        (error) => errorMessages[error as keyof Errors]
      );
    }

    return [];
  }

  control = new FormControl(null, [
    Validators.required,
    Validators.maxLength(10),
  ]);

  readonly code = `<app-input label="Input field" id="simple-input" [disabled]="false" [errors]="errors" [control]="control"></app-input>`;
}
