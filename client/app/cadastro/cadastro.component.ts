import { Component, Input } from '@angular/core';
import { FotoComponent } from "../foto/foto.component";

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent{
    foto: FotoComponent = new FotoComponent();

    constructor(){
        this.foto.titulo = "Tituloo",
        this.foto.url = "URL",
        this.foto.descricao = "Diz algo ae"
    }
    cadastrar(event){
        event.preventDefault();
        console.log(this.foto);
    }
}
