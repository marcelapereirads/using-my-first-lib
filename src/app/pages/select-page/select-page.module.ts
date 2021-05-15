import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectModule } from 'basic-component-lib';

import { DefaultPageModule } from '../default-page/default-page.module';
import { SelectPageComponent } from './select-page.component';

@NgModule({
  declarations: [
    SelectPageComponent
  ],
  imports: [
    CommonModule,
    DefaultPageModule,
    SelectModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SelectPageModule { }
