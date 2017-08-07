import { NgModule } from '@angular/core';
import { FotoComponent } from './foto.component';
import { FiltroPorTitulo } from "./foto.pipes";

@NgModule({
    declarations: [ FotoComponent ],
    exports: [ FotoComponent, FiltroPorTitulo ]
})
export class FotoModule{}