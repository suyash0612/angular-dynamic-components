import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserService } from './Services/user.services';
import { FormsModule } from '@angular/forms';
import { ConfirmDeleteComponent } from './confirm-delete/confirm-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ConfirmDeleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
