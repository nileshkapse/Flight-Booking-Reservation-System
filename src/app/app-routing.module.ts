import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { LoginPageComponent } from './login-page/login-page.component';
import { ReportComponent } from './report/report.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [

  {path: '', 
  component:HomeComponent
  },

  {path: 'login-page', 
  component:LoginPageComponent
  },

  {path:'signup',
  component:SignupComponent
  },
  
  {path:'report',
  component:ReportComponent
  }
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
