import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './core/header/header.module';
import { SidebarMenuModule } from './core/sidebar-menu/sidebar-menu.module';
import { InputPageModule } from './pages/input-page/input-page.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    SidebarMenuModule,
    InputPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
