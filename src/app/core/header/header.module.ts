import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header.component';
import { HamburguerButtonComponent } from './hamburguer-button/hamburguer-button.component';

const components = [HeaderComponent, HamburguerButtonComponent]

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: components
})
export class HeaderModule { }
