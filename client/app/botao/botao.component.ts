import { Component, Input } from '@angular/core'

@Component({
    selector: 'botao',
    templateUrl: './botao.component.html'
})
export class BotaoComponent {
    nome
    estilo
    tipo
    desabilitado
}