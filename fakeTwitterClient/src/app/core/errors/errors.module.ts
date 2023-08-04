import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Error401Component } from "./401/error-401.component";
import { Error500Component } from "./500/error-500.component";
import { ComingSoonComponent } from "./coming-soon/coming-soon.component";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [
        Error401Component,
        Error500Component,
        ComingSoonComponent,
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: []
})
export class ErrorsModule { }
