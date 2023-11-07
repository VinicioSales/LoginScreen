import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BotaoComponent } from './botao.component';

describe('BotaoComponent', () => {
  let component: BotaoComponent;
  let fixture: ComponentFixture<BotaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotaoComponent]
    });

    fixture = TestBed.createComponent(BotaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default width', () => {
    expect(component.width).toBe('292px');
  });

  it('should have default height', () => {
    expect(component.height).toBe('39px');
  });

  it('should have default texto', () => {
    expect(component.texto).toBe('botao');
  });
});