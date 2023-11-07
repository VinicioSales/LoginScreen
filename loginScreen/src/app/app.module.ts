import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ModalGeralComponent } from './components/modal-geral/modal-geral.component';
import { InputComponent } from './components/input/input.component';
import { BotaoComponent } from './components/botao/botao.component';
import { BotaoTemaComponent } from './components/botao-tema/botao-tema.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ModalGeralComponent,
    InputComponent,
    BotaoComponent,
    BotaoTemaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
