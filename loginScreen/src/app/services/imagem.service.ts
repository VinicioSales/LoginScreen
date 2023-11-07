import { Injectable } from '@angular/core';
import { TemaService } from './tema.service';

@Injectable({
  providedIn: 'root'
})
export class ImagemService {

  constructor(private temaService: TemaService) { }

  atualizarImg(imgTemaClaro: string, imgTemaEscuro: string): string {
    return this.temaService.temaEscuroLigado ? imgTemaEscuro : imgTemaClaro;
  }

  getExitHover(): string {
    return 'assets/img/exit-hover.png'; // Caminho para a imagem de hover
  }

  getRemoverHoverImg(): string {
    return 'assets/img/remover-hover.png'; // Caminho para a imagem de hover do botão remover
  }

  getEditarHoverImg(): string {
    return 'assets/img/editar-hover.png'; // Caminho para a imagem de hover do botão editar
  }

  getAjudaHoverImg(): string {
    return 'assets/img/ajuda-hover.png'; // Caminho para a imagem de hover do botão ajuda (se houver)
  }
}