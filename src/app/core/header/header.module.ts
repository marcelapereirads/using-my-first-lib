import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header.component';
import { HamburgerButtonComponent } from './hamburguer-button/hamburger-button.component';

const components = [HeaderComponent, HamburgerButtonComponent]

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: components
})
export class HeaderModule { }
