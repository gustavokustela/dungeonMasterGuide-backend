import { Component, OnInit } from '@angular/core';
import { MesaClientService } from './mesa-client.service';
import { MesaVO } from '../../../app/base/vo/mesa';

@Component({
  selector: 'app-mesa-client',
  templateUrl: './mesa-client.component.html',
  styleUrls: ['./mesa-client.component.css'],
  providers: [MesaClientService]
})
export class MesaClientComponent implements OnInit {

  public mesasParticipante: Array<MesaVO>;
  currentUserId: any;
  usuarioAtual: string;

  constructor(private mesaClientService: MesaClientService) { }

  ngOnInit() {
    this.currentUserId = JSON.parse(localStorage.getItem('currentUser')).userId;
    this.recuperaMesas();
  }

  recuperaMesas() {
    this.mesaClientService.recuperarMesasParticipante().subscribe(response => {
      this.mesasParticipante = response;
      console.log(this.mesasParticipante);
    },
      error => {
        // this.cadastroService.hideLoader();
        this.mesaClientService.showError('Erro ao buscar mesas');
      });
  }

  // populaJogadores() {
  //   this.mesasParticipante.jogadores.forEach(jogador => {
  //     if (jogador.userId === this.currentUserId) {
  //       this.usuarioAtual = jogador.userId;
  //     }
  //   });
  // }

}
