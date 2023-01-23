import { DasbordComponent } from './dasbord/dasbord.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './helper/auth.guard';

const routes: Routes = [
  { path: "", pathMatch: 'full', redirectTo: "login" },
  { path: "login", component: LoginComponent},
  { path: "das", component: DasbordComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
