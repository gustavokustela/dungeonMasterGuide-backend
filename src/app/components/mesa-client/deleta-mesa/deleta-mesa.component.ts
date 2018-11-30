import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MesaVO } from 'src/app/base/vo/mesa';
import { DeletaMesaService } from './deleta-mesa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deleta-mesa',
  templateUrl: './deleta-mesa.component.html',
  styleUrls: ['./deleta-mesa.component.css']
})
export class DeletaMesaComponent implements OnInit {

  public Mesa: MesaVO = new MesaVO;

  constructor(public dialogRef: MatDialogRef<DeletaMesaComponent>,
              @Inject(MAT_DIALOG_DATA) public data: MesaVO,
              public deletaMesaService: DeletaMesaService,
              public router: Router
              ) { }

  ngOnInit() {
    this.Mesa = this.data;
  }

  deletarMesa() {
    this.deletaMesaService.showLoader();
    this.deletaMesaService.removerMesa(this.Mesa.id.toString()).subscribe(response => {
      this.deletaMesaService.hideLoader();
      this.deletaMesaService.showSuccess('Mesa Removida Com Sucesso');
      this.onNoClick();
      location.reload();
    },
      error => {
        this.deletaMesaService.hideLoader();
        this.deletaMesaService.showError('Erro ao remover mesa');
      });
  }

  onNoClick() {
    this.dialogRef.close();
  }

}
