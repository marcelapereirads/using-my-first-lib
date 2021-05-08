import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultPageModule } from '../default-page/default-page.module';
import { ButtonPageComponent } from './button-page.component';
import { ButtonModule } from 'src/app/components/button/button.module';

@NgModule({
  declarations: [
    ButtonPageComponent
  ],
  imports: [
    CommonModule,
    DefaultPageModule,
    ButtonModule
  ]
})
export class ButtonPageModule { }
