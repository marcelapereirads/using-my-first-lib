import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputModule } from 'basic-component-lib';

import { DefaultPageModule } from '../default-page/default-page.module';
import { InputPageComponent } from './input-page.component';

@NgModule({
  declarations: [
    InputPageComponent
  ],
  imports: [
    CommonModule,
    DefaultPageModule,
    InputModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InputPageModule { }
