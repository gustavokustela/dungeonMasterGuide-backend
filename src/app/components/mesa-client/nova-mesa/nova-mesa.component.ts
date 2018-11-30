import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Router } from '@angular/router';
import { AuthService } from '../../../base/util/auth.service';
import { NovaMesaService } from './nova-mesa.service';
import { MesaVO } from 'src/app/base/vo/mesa';
import { PessoaVO } from 'src/app/base/vo/pessoa';
import { UsuarioVO } from 'src/app/base/vo/usuario';

@Component({
  selector: 'app-nova-mesa',
  templateUrl: './nova-mesa.component.html',
  styleUrls: ['./nova-mesa.component.css'],
  providers: [NovaMesaService]
})
export class NovaMesaComponent implements OnInit {

  public mesa: MesaVO = new MesaVO();
  public pessoa: PessoaVO = new PessoaVO();

  currentUser: any;

  constructor(
    public dialogRef: MatDialogRef<NovaMesaComponent>,
    private novaMesaService: NovaMesaService,
    private authService: AuthService,
    private router: Router) {}

  ngOnInit() {
    if (this.authService.canActivate()) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
  }

  novaMesa() {
    this.novaMesaService.showLoader();
    this.mesa.idMestre = this.currentUser.userId;
    this.mesa.jogadores = [];
    this.novaMesaService.criarNovaMesa(this.mesa).subscribe(response => {
       this.novaMesaService.hideLoader();
      this.novaMesaService.showSuccess('Mesa Criada Com Sucesso');
      this.onNoClick();
      location.reload();
    },
    error => {
      this.novaMesaService.hideLoader();
      this.novaMesaService.showError('Erro ao criar mesa');
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
