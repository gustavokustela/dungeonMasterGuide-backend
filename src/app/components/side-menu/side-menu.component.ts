import { Component, OnInit } from '@angular/core';
import { isNullOrUndefined } from 'util';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { AuthService } from '../../base/util/auth.service';

// Components
import { NovaMesaComponent } from '../mesa-client/nova-mesa/nova-mesa.component';
import { EditaMesaComponent } from '../mesa-client/edita-mesa/edita-mesa.component';
import { MesaVO } from 'src/app/base/vo/mesa';
import { UsuarioService } from '../usuario/usuario.service';
import { PessoaVO } from 'src/app/base/vo/pessoa';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  public Pessoa: PessoaVO = new PessoaVO();

  constructor(public dialog: MatDialog, public authService: AuthService, public usuarioService: UsuarioService) { }

  ngOnInit() {
    this.recuperaPessoa();
  }

  recuperaPessoa() {
      this.usuarioService.recuperarPessoa().subscribe(response => {
        this.Pessoa = response;
      },
        error => {
          // this.cadastroService.hideLoader();
          this.usuarioService.showError('Erro ao criar mesa');
        });
  }


  showDialogNovaMesa() {
    this.dialog.open(NovaMesaComponent);
  }

  sair() {
    this.authService.logout();
  }
}
