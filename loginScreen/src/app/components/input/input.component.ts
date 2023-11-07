import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input() type: string = 'text'
  @Input() height: string = '30px'
  @Input() width?: string = 'input'
  @Input() placeholder: string = 'input'

  @Output() valorChange = new EventEmitter<string>();

  valor: string = '';

  onValorChange(novoValor: string): void {
    this.valor = novoValor;
    this.valorChange.emit(this.valor);
  }
}
  