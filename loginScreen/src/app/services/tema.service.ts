import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  private _temaEscuroLigado = new BehaviorSubject<boolean>(false);
  temaEscuroLigado$ = this._temaEscuroLigado.asObservable();

  imgTemaEscuro: string = 'caminho/para/imagem/escuro.jpg';
  imgTemaClaro: string = 'caminho/para/imagem/claro.jpg';

  constructor() {}

  //NOTE - atualizarImg
  atualizarImg(isDark: boolean): string {
    return isDark ? this.imgTemaEscuro : this.imgTemaClaro;
  }

  //NOTE - toggleTema
  toggleTema() {
    this._temaEscuroLigado.next(!this._temaEscuroLigado.value);
  }

  //NOTE - temaEscuroLigado
  get temaEscuroLigado() {
    return this._temaEscuroLigado.value;
  }

}