import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultPageModule } from '../default-page/default-page.module';
import { SelectPageComponent } from './select-page.component';
import { SelectModule } from 'src/app/components/select/select.module';

@NgModule({
  declarations: [
    SelectPageComponent
  ],
  imports: [
    CommonModule,
    DefaultPageModule,
    SelectModule
  ]
})
export class SelectPageModule { }
