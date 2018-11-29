import { Component, OnInit, ViewChild, Input, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

// Component
import { MesaDetalheComponent } from '../mesa-client/mesa-detalhe/mesa-detalhe.component';

// Service
import { DashboardServiceService } from './dashboard-service.service';
import { MesaClientService } from '../mesa-client/mesa-client.service';
import { Router, NavigationExtras } from '@angular/router';
import { MesaVO } from 'src/app/base/vo/mesa';
import { EditaMesaComponent } from '../mesa-client/edita-mesa/edita-mesa.component';
import { AuthService } from 'src/app/base/util/auth.service';
import { DeletaMesaComponent } from '../mesa-client/deleta-mesa/deleta-mesa.component';
import { BuscaUsuarioComponent } from '../usuario/busca-usuario/busca-usuario.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DashboardServiceService]
})
export class DashboardComponent implements OnInit {

  public Mesas: Array<MesaVO>;

  constructor(public dialog: MatDialog,
    public authService: AuthService,
    private router: Router,
    public mesaClientService: MesaClientService) { }

  ngOnInit() {
    this.recuperaMesas();
  }

  showDialogEditaMesa(mesa: MesaVO) {
    this.dialog.open(EditaMesaComponent, {
      data: mesa
    });
  }

  showDialogDeletaMesa(mesa: MesaVO) {
    this.dialog.open(DeletaMesaComponent, {
      data: mesa
    });
  }

  showDialogAdicionaJogadorMesa(mesa: MesaVO) {
    this.dialog.open(BuscaUsuarioComponent, {
      data: mesa
    });
  }

  recuperaMesas() {
    this.mesaClientService.recuperarMesa().subscribe(response => {
      this.Mesas = response;
      console.log(this.Mesas);
    },
      error => {
        // this.cadastroService.hideLoader();
        this.mesaClientService.showError('Erro ao buscar mesas');
      });
  }

  recuperaMesasParticipante() {
    this.mesaClientService.recuperarMesa().subscribe(response => {
      this.Mesas = response;
      console.log(this.Mesas);
    },
      error => {
        // this.cadastroService.hideLoader();
        this.mesaClientService.showError('Erro ao buscar mesas');
      });
  }
}
