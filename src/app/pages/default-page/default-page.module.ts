import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultPageComponent } from './default-page.component';

@NgModule({
  declarations: [
    DefaultPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DefaultPageComponent
  ]
})
export class DefaultPageModule { }
