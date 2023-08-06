import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { UserRegistrationComponent } from "./user-registration/user-registration.component";
import { UserLoginComponent } from "./user-login/user-login.component";
import { UserRoutingModule } from "./user-routing.module";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { SharedModule } from "src/app/core/shared/shared.module";
import { UserProfileComponent } from "./user-profile/user-profile.component";

@NgModule({
    declarations: [
        UserLoginComponent,
        UserRegistrationComponent,
        UserProfileComponent,
    ],
    imports: [
        CommonModule,
        UserRoutingModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        FontAwesomeModule,
        SharedModule,
    ],
    exports: [
        UserLoginComponent,
        UserRegistrationComponent,
        UserProfileComponent,
    ]
})
export class UserModule { }
