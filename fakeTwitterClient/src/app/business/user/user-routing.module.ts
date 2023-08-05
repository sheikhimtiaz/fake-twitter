import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserLoginComponent } from "./user-login/user-login.component";
import { UserRegistrationComponent } from "./user-registration/user-registration.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";

const routes: Routes = [
    {
      path: 'login',
      component: UserLoginComponent,
    },
    {
      path: 'registration',
      component: UserRegistrationComponent,
    },
    {
      path: 'profile',
      component: UserProfileComponent,
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  
  export class UserRoutingModule { }
  