import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filtroPorTitulo'
})

export class FiltroPorTitulo implements PipeTransform {
    transform(fotos: any, digitado: string){
        console.log(fotos);
        console.log(digitado);
    }
}