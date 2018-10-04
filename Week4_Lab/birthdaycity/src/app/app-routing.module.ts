import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'Welcome', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'Welcome', loadChildren: './welcome/welcome.module#WelcomePageModule' },
  { path: 'About', loadChildren: './about/about.module#AboutPageModule' },
  { path: 'Cake', loadChildren: './cake/cake.module#CakePageModule' },
  { path: 'Confirm', loadChildren: './confirm/confirm.module#ConfirmPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
