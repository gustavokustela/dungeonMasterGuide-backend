import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CadastroService } from './cadastro.service';
import { AuthService } from '../../base/util/auth.service';
import { PessoaVO } from 'src/app/base/vo/pessoa';
import { UsuarioVO } from 'src/app/base/vo/usuario';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  // public user: any = { 'email': '', 'password': '' };

  public pessoa: PessoaVO = new PessoaVO();
  public user: UsuarioVO = new UsuarioVO();

  constructor(private cadastroService: CadastroService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    if (this.authService.canActivate()) {
      this.router.navigate(['/dashboard']);
    }
  }

  novoUsuario() {
    this.cadastroService.showLoader();

    this.cadastroService.criarUsuario(this.user).subscribe(response => {
      this.pessoa.userId = response.id;
      this.pessoa.userEmail = response.email;

      this.cadastroService.criarPessoa(this.pessoa).subscribe(response => {
          this.cadastroService.hideLoader();
        this.cadastroService.showSuccess('Usuário criado com sucesso');
        this.router.navigate(['/']);
      },
      error => {
        this.cadastroService.hideLoader();
        this.cadastroService.showError('Erro ao criar usuário');
      });
    },
    error => {
      this.cadastroService.hideLoader();
      this.cadastroService.showError('Erro ao criar usuário');
    });
  }

}
