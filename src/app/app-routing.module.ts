import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContatoComponent } from './contato/contato.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', pathMatch: "full", redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'contato', component: ContatoComponent},
  {path: 'empresa', component: EmpresaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
