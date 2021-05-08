import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { InputPageComponent } from './pages/input-page/input-page.component';
import { SelectPageComponent } from './pages/select-page/select-page.component';

const routes: Routes = [
  { path: 'input', component: InputPageComponent },
  { path: 'select', component: SelectPageComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
