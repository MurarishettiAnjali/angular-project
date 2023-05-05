import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './items/items.component';
import { ItemsCardComponent } from './items/items-card/items-card.component';
import { DetailsCardComponent } from './items/details-card/details-card.component';
import { OnePipe } from './pipes/one.pipe';
import { MaterialModule } from './material/material.module';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ItemsComponent,
    ItemsCardComponent,
    HomeComponent,
    DetailsCardComponent,
    OnePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    UserModule,
    AdminModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    SharedModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
