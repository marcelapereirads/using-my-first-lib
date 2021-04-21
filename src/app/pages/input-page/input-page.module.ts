import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultPageModule } from '../default-page/default-page.module';
import { InputPageComponent } from './input-page.component';
import { InputModule } from 'src/app/components/input/input.module';

@NgModule({
  declarations: [
    InputPageComponent
  ],
  imports: [
    CommonModule,
    DefaultPageModule,
    InputModule
  ]
})
export class InputPageModule { }
