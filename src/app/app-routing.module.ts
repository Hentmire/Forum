import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';

import { AuthGuard } from './core/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent,  canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent},
  { path: 'verify-email-address', component: VerifyEmailComponent }
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
