import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private router: Router,
  ) {}

  static readonly MENSAGEM_EMAIL_INVALIDO = 'Email inválido!';
  static readonly MENSAGEM_SENHA_INVALIDA = 'Senha inválida!';
  static readonly MENSAGEM_CAMPOS_VAZIOS = 'Preencha todos os campos!';
  static readonly MENSAGEM_DADOS_INVALIDOS = 'Email ou senha inválidos!'
  static readonly MENSAGEM_USUARIO_NAO_ENCONTRADO = 'Usuário não encontrado!'
  static readonly MENSAGEM_FORMATO_DADOS_INCORRETO = 'Revise a formatação dos dados!'
  static readonly MENSAGEM_INTERNAL_ERROR = 'Ocorreu um erro inesperado. Tente novamento em alguns instantes. Caso persista, entre em contato com o suporte!'


  @Input() valorEmail?: string;
  @Input() valorSenha?: string;
  @Input() mensagemModal: string = '';
  
  mostrarModal: boolean = false;

  //NOTE - navegarRotaEsqueciSenha
  navegarRotaEsqueciSenha(): void {
    this.router.navigate(['/esqueci-senha']);
  }

  //NOTE - navegarRotaRegistro
  navegarRotaRegistro(): void {
    this.router.navigate(['/registro']);
  }

  //NOTE - handleFecharModal
  handleFecharModal() {
    this.mostrarModal = false;
  }

  //NOTE - validarEmail
  validarEmail(email: any): boolean {
    const re = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    return re.test(email);
  }

  //NOTE - validarSenha
  validarSenha(senha: any): boolean {
    return senha.length >= 8;
  }

  //NOTE - validarCredenciais
  validarCredenciais(): boolean {
    if (!this.valorEmail || !this.valorSenha) {
      this.exibirMensagemModal(LoginComponent.MENSAGEM_CAMPOS_VAZIOS);
      return false;
    }
    
    if (!this.validarEmail(this.valorEmail)) {
      this.exibirMensagemModal(LoginComponent.MENSAGEM_EMAIL_INVALIDO);
      return false;
    }
    
    if (!this.validarSenha(this.valorSenha)) {
      this.exibirMensagemModal(LoginComponent.MENSAGEM_SENHA_INVALIDA);
      return false;
    }

    this.fecharMensagemModal();
    return true;
  }

  //NOTE - exibirMensagemModal
  exibirMensagemModal(mensagem: string): void {
    this.mostrarModal = true;
    this.mensagemModal = mensagem;
  }

  //NOTE - fecharMensagemModal
  fecharMensagemModal() {
    this.mostrarModal = false;
    this.mensagemModal = "";
  }

  //NOTE - onValorInputChange
  onValorInputChange(novoValor: string, inputId: string) {
    switch (inputId) {
      case 'inputEmail':
        this.valorEmail = novoValor;
        break;
        
      case 'inputSenha':
        this.valorSenha = novoValor;
        break;
    }
  }

  //NOTE - logar
  logar() {
  }

  //NOTE - onLogin
  onLogin() {
    const credenciaisValidadas =  this.validarCredenciais();
    if (credenciaisValidadas) {
      this.logar();
    }
  }
}