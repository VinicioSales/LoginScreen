import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'

import { InputComponent } from './input.component';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [InputComponent]
    });
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onValorChange', () => {
    // NOTE - deve atualizar a propriedade valor com o novo valor
    it('deve atualizar a propriedade valor com o novo valor', () => {
      const novoValor = 'teste';
      component.onValorChange(novoValor);
      expect(component.valor).toBe(novoValor);
    });

    // NOTE - deve emitir o evento valorChange com o novo valor
    it('deve emitir o evento valorChange com o novo valor', () => {
      const novoValor = 'teste';
      spyOn(component.valorChange, 'emit'); // Espiona o EventEmitter
      
      component.onValorChange(novoValor);
      
      expect(component.valorChange.emit).toHaveBeenCalledWith(novoValor);
    });
    
    // NOTE - deve funcionar com strings vazias
    it('deve funcionar com strings vazias', () => {
      const novoValor = '';
      component.onValorChange(novoValor);
      expect(component.valor).toBe(novoValor);
    });

    // NOTE - deve funcionar com qualquer string
    it('deve funcionar com qualquer string', () => {
      const novoValor = '123!@#ABCabc';
      component.onValorChange(novoValor);
      expect(component.valor).toBe(novoValor);
    });
  });
});