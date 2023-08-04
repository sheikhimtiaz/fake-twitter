import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth";
import { NgModule } from "@angular/core";
import { Error401Component } from "./401/error-401.component";
import { Error500Component } from "./500/error-500.component";
import { ComingSoonComponent } from "./coming-soon/coming-soon.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: 'error-404',
        pathMatch: 'full'
    },
    {
        path: 'error-401',
        component: Error401Component
    },
    {
        path: 'error-500',
        component: Error500Component,
        canActivate: [AuthGuard]
    },
    {
        path: 'coming-soon-billing',
        component: ComingSoonComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ErrorsRoutingModule { }
