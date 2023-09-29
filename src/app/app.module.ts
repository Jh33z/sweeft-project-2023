import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersListComponent } from './homepage/users-list/users-list.component';
import { UserComponent } from './homepage/users-list/user/user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [AppComponent, HomepageComponent, UsersListComponent, UserComponent, UserDetailsComponent, ErrorComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
