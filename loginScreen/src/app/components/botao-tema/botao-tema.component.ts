import { Component } from '@angular/core';
import { TemaService } from '../../services/tema.service';
import { ImagemService } from 'src/app/services/imagem.service';

@Component({
  selector: 'app-botao-tema',
  templateUrl: './botao-tema.component.html',
  styleUrls: ['./botao-tema.component.css']
})
export class BotaoTemaComponent {
  imgSrc?: string;
  private imgTemaClaro: string = 'assets/img/button-to-dark-mode.png';
  private imgTemaEscuro: string = 'assets/img/button-to-light-mode.png';

  constructor(private temaService: TemaService, private imagemService: ImagemService) {
    this.atualizarImg();

    // Escute as mudanças do tema
    this.temaService.temaEscuroLigado$.subscribe(() => {
      this.atualizarImg();
    });
  }

  //NOTE - atualizarImg
  atualizarImg() {
    this.imgSrc = this.imagemService.atualizarImg(this.imgTemaClaro, this.imgTemaEscuro);
  }

  //NOTE - toggleTema
  toggleTema() {
    this.temaService.toggleTema();
    if (this.temaService.temaEscuroLigado) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }
}