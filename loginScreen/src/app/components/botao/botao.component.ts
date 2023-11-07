import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.css']
})
export class BotaoComponent {
  @Input() width: string = "292px"
  @Input() height: string = "39px"
  @Input() texto: string = "botao"
  @Input() backgroundHover: string = '';
  @Input() background: string = "var(--cor-botao)"

  hover: boolean = false;

}