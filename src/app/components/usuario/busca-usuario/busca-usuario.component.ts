import { Component, OnInit, Inject } from '@angular/core';
import { MesaVO } from 'src/app/base/vo/mesa';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DeletaMesaService } from '../../mesa-client/deleta-mesa/deleta-mesa.service';
import { Router } from '@angular/router';
import { BuscaUsuarioService } from './busca-usuario.service';
import { PessoaVO } from 'src/app/base/vo/pessoa';
import { UsuarioService } from '../usuario.service';
import { MesaClientService } from '../../mesa-client/mesa-client.service';
import { EditaMesaService } from '../../mesa-client/edita-mesa/edita-mesa.service';

@Component({
  selector: 'app-busca-usuario',
  templateUrl: './busca-usuario.component.html',
  styleUrls: ['./busca-usuario.component.css'],
  providers: [BuscaUsuarioService]
})
export class BuscaUsuarioComponent implements OnInit {

  public usuarios: Array<PessoaVO>;
  public usuariosAdicionados: Array<PessoaVO>;
  public Mesa: MesaVO = new MesaVO();
  public usuariosCompare: Array<PessoaVO>;
  isLoading = false;

  emailBusca: string;

  constructor(public dialogRef: MatDialogRef<BuscaUsuarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MesaVO,
    public buscaUsuarioService: BuscaUsuarioService,
    public usuarioService: UsuarioService,
    public editaMesaService: EditaMesaService,
    public router: Router
  ) { }

  ngOnInit() {
    this.Mesa = this.data;
    this.usuariosAdicionados = this.Mesa.jogadores;
    this.BuscaUsuarios();
  }

  BuscaUsuarios() {
    this.usuarioService.showLoader();
    this.isLoading = true;
    this.buscaUsuarioService.recuperarUsuarios().subscribe(response => {
      this.usuarioService.hideLoader();
      this.usuarios = response;
      this.isLoading = false;
    },
      error => {
        this.usuarioService.hideLoader();
        this.isLoading = false;
        this.buscaUsuarioService.showError('Erro ao buscar usuários mesa');
      });

  }

  salvaAlteracaoMesa() {
    this.usuarioService.showLoader();
    this.editaMesaService.EditarMesa(this.Mesa).subscribe(response => {
      this.usuarioService.hideLoader();
      this.editaMesaService.showSuccess('Usuário Alterado com sucesso');
      this.onNoClick();
      this.usuarioService.recuperarPessoa();
      this.usuariosAdicionados = [];
    },
      error => {
        this.usuarioService.hideLoader();
        this.buscaUsuarioService.showError('Erro adicionar usuários na mesa');
      });
  }


  verificaParticipante(pessoa: any) {
    let participandoControl = false;
    // const pessoa: PessoaVO = this.authService.getLoggedPerson();

    this.Mesa.jogadores.forEach(jogador => {
      if (jogador.userId === pessoa.userId) {
        participandoControl = true;
      }
    });

    return participandoControl;
  }

  adicionaUsuarioMesa(pessoa: any) {
    this.usuariosAdicionados.push(pessoa);
    this.Mesa.jogadores = this.usuariosAdicionados;
  }

  removeUsuarioMesa(pessoa: any) {
    this.usuariosAdicionados.forEach((usuarioAdicionado, index) => {
      if (usuarioAdicionado.userId === pessoa.userId) {
        this.usuariosAdicionados.splice(index, 1);
        this.Mesa.jogadores = this.usuariosAdicionados;
      }
    });
  }

  onNoClick() {
    this.dialogRef.close();
    this.usuariosAdicionados = [];
  }

}
