import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './usuario.service';
import { PessoaVO } from 'src/app/base/vo/pessoa';
import { PerfilEditComponent } from './perfil-edit/perfil-edit.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
  providers: [UsuarioService]
})
export class UsuarioComponent implements OnInit {

  Pessoa: PessoaVO = new PessoaVO();
  isLoading = false;

  constructor(public usuarioService: UsuarioService, public dialog: MatDialog) { }

  ngOnInit() {
    this.recuperaPessoa();
  }

  recuperaPessoa() {
    this.isLoading = true;
    this.usuarioService.recuperarPessoa().subscribe(response => {
      this.Pessoa = response;
      this.isLoading = false;
      console.log(this.Pessoa);
    },
      error => {
        this.isLoading = false;
        this.usuarioService.showError('Erro ao recuperar dados');
      });
  }

  openDialog() {
    this.dialog.open(PerfilEditComponent, {
      data: this.Pessoa,
      disableClose: true
    });
  }

}
