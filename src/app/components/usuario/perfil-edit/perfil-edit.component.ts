import { PessoaVO } from './../../../base/vo/pessoa';
import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-perfil-edit',
  templateUrl: './perfil-edit.component.html',
  styleUrls: ['./perfil-edit.component.css']
})
export class PerfilEditComponent implements OnInit {

  pessoa: PessoaVO;
  isLoading = false;

  constructor(public dialogRef: MatDialogRef<PerfilEditComponent>,
              @Inject(MAT_DIALOG_DATA) public data: PessoaVO,
              public usuarioService: UsuarioService) { }

  ngOnInit() {
    this.pessoa = this.data;
    console.log(this.pessoa);
  }

  handleFileSelect(evt) {
    const files = evt.target.files;
    const file = files[0];

    if (files && file) {
        const reader = new FileReader();

        reader.onload = this._handleReaderLoaded.bind(this);

        reader.readAsBinaryString(file);
    }
  }

  _handleReaderLoaded(readerEvt) {
    const base64Header = 'data:image/jpeg;base64,';
    const binaryString = readerEvt.target.result;
    this.pessoa.imgPerfil = base64Header + btoa(binaryString);
  }

  atualizarPessoa() {
    this.isLoading = true;

    this.usuarioService.atualizarPessoa(this.pessoa).subscribe(response => {
      this.isLoading = false;
      this.usuarioService.showSuccess('Usuário atualizado com sucesso');
      this.dialogRef.close();
      location.reload();
    },
    error => {
      this.isLoading = false;
      this.usuarioService.showError('Erro ao atualizar usuário');
    });
  }

}
