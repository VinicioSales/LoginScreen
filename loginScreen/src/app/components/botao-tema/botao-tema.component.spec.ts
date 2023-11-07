import { BehaviorSubject } from 'rxjs';
import { BotaoTemaComponent } from './botao-tema.component';
import { TemaService } from 'src/app/services/tema.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('BotaoTemaComponent', () => {
  let component: BotaoTemaComponent;
  let fixture: ComponentFixture<BotaoTemaComponent>;
  let temaServiceMock: Partial<TemaService> & { _temaEscuroLigado: BehaviorSubject<boolean>; temaEscuroLigado$: BehaviorSubject<boolean> };

  beforeEach(() => {
    temaServiceMock = {
      _temaEscuroLigado: new BehaviorSubject<boolean>(false),
      temaEscuroLigado$: new BehaviorSubject<boolean>(false),
      toggleTema: jasmine.createSpy()
    };

    TestBed.configureTestingModule({
      declarations: [BotaoTemaComponent],
      providers: [{ provide: TemaService, useValue: temaServiceMock }]
    });

    fixture = TestBed.createComponent(BotaoTemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //SECTION - atualizarImg
  describe('atualizarImg', () => {
    //NOTE - deve definir imgSrc para o modo claro quando o tema escuro estiver desativado
    it('deve definir imgSrc para o modo claro quando o tema escuro estiver desativado', () => {
      temaServiceMock._temaEscuroLigado.next(false);
      
      component.atualizarImg();
      expect(component.imgSrc).toBe('assets/img/button-to-dark-mode.png');
    });
  });
  //!SECTION

  //SECTION - 
  describe('toggleTema', () => {
    //NOTE - deve remover a classe dark-theme do body quando o tema escuro for desativado
    it('deve remover a classe dark-theme do body quando o tema escuro for desativado', () => {
      temaServiceMock._temaEscuroLigado.next(true);
      component.toggleTema();
      expect(document.body.classList).not.toContain('dark-theme');
    });
  });
  //SECTION - 
});