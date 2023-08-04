import { NgModule } from "@angular/core";
import { AuthGuard } from "./guard/auth.guard";
import { AuthService } from "./services/auth.service";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        AuthGuard,
        AuthService
    ]
})
export class AuthModule { }