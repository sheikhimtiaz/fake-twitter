import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserLoginComponent } from "./user-login/user-login.component";
import { UserRegistrationComponent } from "./user-registration/user-registration.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { SignedOutGuard } from "src/app/core/auth/guard/signed-out.guard";
import { AuthGuard } from "src/app/core/auth";

const routes: Routes = [
    {
      path: 'login',
      component: UserLoginComponent,
      canActivate: [SignedOutGuard],
    },
    {
      path: 'registration',
      component: UserRegistrationComponent,
      canActivate: [SignedOutGuard],
    },
    {
      path: 'profile',
      component: UserProfileComponent,
      canActivate: [AuthGuard],
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  
  export class UserRoutingModule { }
  