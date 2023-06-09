import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { RouterModule, Routes } from '@angular/router';

const route:Routes=[

  {
  path:"home",
  component: HomeComponent,
}]
@NgModule({
  declarations: [
    HomeComponent,
    AdminhomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class AdminModule { }
