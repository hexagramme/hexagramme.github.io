import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { NavComponent } from './nav/nav.component';
import { AppComponent } from './app.component';
const routes: Routes = [
  {path: 'dashboard', component: DashComponent}
  // {path: '', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
