import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';
import { HamburguerButtonComponent } from './hamburguer-button/hamburguer-button.component';

const components = [HeaderComponent, HamburguerButtonComponent]

@NgModule({
  declarations: components,
  imports: [
    CommonModule
  ],
  exports: components
})
export class HeaderModule { }
