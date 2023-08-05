import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth/guard/auth.guard';

const routes: Routes = [
  {
      path: 'home',
      loadChildren: () => import('./business/home/home.module').then(module => module.HomeModule),
      canActivate: [AuthGuard]
  },
  {
      path: 'user',
      loadChildren: () => import('./business/user/user.module').then(module => module.UserModule),
  },
  {
      path: 'errors',
      loadChildren: () => import('./core/errors/errors.module').then(module => module.ErrorsModule),
  },
  {   path: '', redirectTo: 'home', pathMatch: 'full'   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
