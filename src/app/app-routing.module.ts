import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaCartaoComponent } from './lista-cartao/lista-cartao.component';
import { NovoCartaoComponent } from './novo-cartao/novo-cartao.component';

const routes: Routes = [
  { path: 'listagem', component: ListaCartaoComponent},
  {path: 'novo', component: NovoCartaoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }