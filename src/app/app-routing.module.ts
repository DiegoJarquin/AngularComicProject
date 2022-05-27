import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ComicsComponent } from './comics/comics.component';
import {RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './agregar/agregar.component';
import { RegistroComponent } from './registro/registro.component';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [
  {path:"login", component: LoginComponent},
  {path:"comics", component: ComicsComponent},
  {path:"agregar", component: AgregarComponent},
  {path:"registro", component: RegistroComponent},
  {path:"edit", component: EditComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
