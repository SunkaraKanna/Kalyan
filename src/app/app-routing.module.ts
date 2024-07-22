import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { EmployerRegisterComponent } from './employer-register/employer-register.component';
import { JobseekerRegisterComponent } from './jobseeker-register/jobseeker-register.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {path:" ", component:HomeComponent},
  {path:"login", component:LoginComponent},
  {path:"welcome", component:WelcomeComponent},
  { path: 'login/welcome', redirectTo: 'welcome' },
  {path:"employer", component:EmployerRegisterComponent},
  { path: 'welcome/employer', redirectTo: 'employer' },
  {path:"jobseeker", component:JobseekerRegisterComponent},
  { path: 'welcome/jobseeker', redirectTo: 'jobseeker' },
  {path:"landing", component:LandingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
