import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { LoginErrorMessages } from './login-error-messages.constant';
import { LoginError } from './login-error.interface';

@Component({
  selector: 'app-login-sample',
  templateUrl: './login-sample.component.html',
  styleUrls: ['./login-sample.component.scss'],
})
export class LoginSampleComponent implements OnInit {
  form = this.createForm();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  createForm(): FormGroup {
    return this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  getControl(fieldName: string) {
    return this.form.get(fieldName) as FormControl;
  }

  getErrors(fieldName: string) {
    const errors = this.form.get(fieldName)?.errors as FormControl;

    if (errors) {
      return Object.keys(errors).map(
        (error: string) => LoginErrorMessages[error as keyof LoginError]
      );
    }

    return [];
  }
}
