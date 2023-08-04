import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth/guard/auth.guard';

const routes: Routes = [
  {
      path: '',
      loadChildren: () => import('./business/home/home.module').then(module => module.HomeModule),
      canActivate: []
  },
  {
      path: 'user',
      loadChildren: () => import('./business/user/user.module').then(module => module.UserModule),
      canActivate: [AuthGuard]
  },
  {
      path: 'errors',
      loadChildren: () => import('./core/errors/errors.module').then(module => module.ErrorsModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
