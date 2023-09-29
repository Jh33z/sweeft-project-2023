import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent },
  { path: 'user-details', component: UserDetailsComponent },
  { path: 'user-details/:id', component: UserDetailsComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
