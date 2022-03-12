import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './shared/services/auth-guard.service';

const routes: Routes = [

  {
    'path':'login',
    component: LoginComponent
  },
  {
    'path':'register',
    component: RegisterComponent
  },
  {
    path:'todo',
    loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule),
  
 //   canActivate: [AuthGuard]

  },
  {
    'path': '',
     pathMatch: 'full',
     redirectTo: '/login'
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
