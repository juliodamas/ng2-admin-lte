import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanActivateGuard } from './services/guard.service';

// Components
import { HomeComponent } from './pages/home/home.component';
import { PageNumComponent } from './pages/page-num/page-num.component';
import { ClientComponent } from './pages/client/client.component';
import { LayoutsAuthComponent } from './pages/layouts/auth/auth';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  //logged routes
  {
    component: LayoutsAuthComponent,
    canActivate: [CanActivateGuard],
    path: '',
    children: [
      {
        component: HomeComponent,
        canActivate: [CanActivateGuard],
        path: 'home'
      },
    ]
  },
  //not logged routes
  {
    component: LoginComponent,
    path: 'login'
  },
  {
    component: RegisterComponent,
    path: 'register'
  },
  {
    canActivate: [CanActivateGuard],
    component: PageNumComponent,
    path: 'page/:id'
  },
  {
    canActivate: [CanActivateGuard],
    component: ClientComponent,
    path: 'client'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
