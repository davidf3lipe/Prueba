import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { AddComponent } from './component/add/add.component';
import { EditComponent } from './component/edit/edit.component';
import { HomeComponent } from './component/home/home.component';



const routes: Routes = [
  {path: '',pathMatch:'full',redirectTo:'/login'},
  {path: 'login', component: LoginComponent, pathMatch: "full" },
  {path: 'add', component: AddComponent},
  {path: 'home', component: HomeComponent},
  {path: 'edit/:id',component:EditComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
