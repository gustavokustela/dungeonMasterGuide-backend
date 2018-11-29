import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { MesaVO } from 'src/app/base/vo/mesa';
import { EditaMesaService } from './edita-mesa.service';

@Component({
  selector: 'app-edita-mesa',
  templateUrl: './edita-mesa.component.html',
  styleUrls: ['./edita-mesa.component.css'],
  providers: [EditaMesaService]
})
export class EditaMesaComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<EditaMesaComponent>, @Inject(MAT_DIALOG_DATA)
              public data: MesaVO,
              public editaMesaService: EditaMesaService,
              public router: Router) { }


  public mesa: MesaVO = new MesaVO();

  ngOnInit() {
    console.log(this.data);
  this.mesa = this.data;
  }

  editaMesa() {
    // this.cadastroService.showLoader();
    // this.data.idMestre = this.currentUser.userId;

    console.log(this.mesa);
    this.editaMesaService.EditarMesa(this.mesa).subscribe(response => {
      // this.cadastroService.hideLoader();
      this.editaMesaService.showSuccess('Mesa Editada Com Sucesso');
      this.onNoClick();
      location.reload();
    },
      error => {
        // this.cadastroService.hideLoader();
        this.editaMesaService.showError('Erro ao editar mesa');
      });
  }

  onNoClick() {
    this.dialogRef.close();
  }

}
