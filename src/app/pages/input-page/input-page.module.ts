import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultPageModule } from '../default-page/default-page.module';
import { InputPageComponent } from './input-page.component';

@NgModule({
  declarations: [
    InputPageComponent
  ],
  imports: [
    CommonModule,
    DefaultPageModule
  ]
})
export class InputPageModule { }
