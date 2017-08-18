import {Component} from '@angular/core';
import { FotoService } from '../foto/foto.service';
import { FotoComponent } from '../foto/foto.component';

@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html'
})
export class ListagemComponent{
    fotos: FotoComponent[] = [];
    service: FotoService;

    constructor(service: FotoService){
        this.service = service;
        service.lista()
        .subscribe(
            fotos => {
            this.fotos = fotos ;
            console.log(this.fotos);
        }, erro => console.log(erro));
    }

    remove(foto: FotoComponent): void{
        this.service.remove(foto)
        .subscribe(fotos => {
            let indiceDaFoto = this.fotos.indexOf(foto);
            this.fotos.splice(indiceDaFoto,1);
            console.log('Foto ' + foto.titulo + ' removida com sucesso');
        },
            erro => console.log(erro)
        );
    }
}