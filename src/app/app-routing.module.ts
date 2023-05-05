
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ItemsComponent } from './items/items.component';
import { DetailsCardComponent } from './items/details-card/details-card.component';

const routes: Routes = [
  {path:"items",component:ItemsComponent},
  {path:"details",component:DetailsCardComponent},
  { path: "login", component: LoginComponent },
  {
    path: "user",
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },

  {
    path: "admin", loadChildren:
      () => import('./admin/admin.module').then(m => m.AdminModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
