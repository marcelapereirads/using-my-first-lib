import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'basic-component-library';
import { DefaultPageModule } from '../default-page/default-page.module';
import { ButtonPageComponent } from './button-page.component';

@NgModule({
  declarations: [
    ButtonPageComponent
  ],
  imports: [
    CommonModule,
    DefaultPageModule,
    ButtonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ButtonPageModule { }
