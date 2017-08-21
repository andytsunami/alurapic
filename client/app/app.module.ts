import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FotoModule } from './foto/foto.module';
import { HttpModule } from '@angular/http';
import { PainelModule } from './painel/painel.module';

import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';

import 'rxjs/add/operator/map';
import { routing } from "./app.routes";
import { BotaoModule } from './botao/botao.module'

import { FormsModule, ReactiveFormsModule } from "@angular/forms"

@NgModule({
    imports: [
        BrowserModule, 
        FotoModule, 
        HttpModule,  
        PainelModule, 
        routing, 
        FormsModule,
        ReactiveFormsModule,
        BotaoModule],
    declarations: [AppComponent, CadastroComponent, ListagemComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}