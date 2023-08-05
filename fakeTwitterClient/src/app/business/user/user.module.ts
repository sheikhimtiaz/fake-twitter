import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { UserRegistrationComponent } from "./user-registration/user-registration.component";
import { UserLoginComponent } from "./user-login/user-login.component";
import { UserRoutingModule } from "./user-routing.module";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
    declarations: [
        UserLoginComponent,
        UserRegistrationComponent
    ],
    imports: [
        CommonModule,
        UserRoutingModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        FontAwesomeModule,
    ],
    exports: [
        UserLoginComponent,
        UserRegistrationComponent
    ]
})
export class UserModule { }
