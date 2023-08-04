import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth";
import { NgModule } from "@angular/core";

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
