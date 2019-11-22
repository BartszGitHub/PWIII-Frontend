import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaCartaoComponent } from './lista-cartao/lista-cartao.component';
import { NovoCartaoComponent } from './novo-cartao/novo-cartao.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaCartaoComponent,
    NovoCartaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
