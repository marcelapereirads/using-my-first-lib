import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidebarMenuComponent } from './sidebar-menu.component';
import { SelectPageModule } from 'src/app/pages/select-page/select-page.module';
import { InputPageModule } from 'src/app/pages/input-page/input-page.module';
import { ButtonPageModule } from 'src/app/pages/button-page/button-page.module';

@NgModule({
  declarations: [
    SidebarMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    InputPageModule,
    SelectPageModule,
    ButtonPageModule
  ],
  exports: [
    SidebarMenuComponent
  ]
})
export class SidebarMenuModule { }
