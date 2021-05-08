import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-select-page',
  templateUrl: './select-page.component.html'
})
export class SelectPageComponent {

  options = [
    {
      value: 'option1',
      viewValue: 'Option 1'
    },
    {
      value: 'option2',
      viewValue: 'Option 2'
    },
    {
      value: 'option3',
      viewValue: 'Option 3'
    }
  ];

  control = new FormControl(null, [Validators.required]);

  readonly error = 'Please fill in the field';

}
