import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { GAuthGuard } from './g-auth.guard';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full' },
  {path: 'home', component: HomeComponent },
  {path: 'admin', canActivate: [GAuthGuard], component: AdminComponent },
  {path: 'login', component: LoginComponent },
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
