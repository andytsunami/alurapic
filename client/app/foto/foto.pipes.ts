import { Pipe, PipeTransform } from "@angular/core";
import { FotoComponent } from "./foto.component";

@Pipe({
    name: 'filtroPorTitulo'
})
export class FiltroPorTitulo implements PipeTransform{
    transform(fotos: FotoComponent[], digitado: string): any{
        let titulo = digitado.toLowerCase();
        return fotos.filter(foto => foto.titulo.toLowerCase().includes(titulo));
    }
}