import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { ButtonModule, InputModule } from 'basic-component-library';
import { LoginSampleComponent } from './login-sample/login-sample.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, LoginSampleComponent],
  imports: [ReactiveFormsModule, CommonModule, InputModule, ButtonModule],
})
export class HomeModule {}
