import { Injectable } from '@angular/core';
import { BaseService } from '../../base/util/base.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends BaseService {

  constructor(public http: HttpClient, public snackBar: MatSnackBar) { super (http, snackBar); }

  recuperarPessoa() {
      const currentUserId = JSON.parse(localStorage.getItem('currentUser')).userId;
      const query = JSON.stringify({'where' : { 'userId' : { 'like' : currentUserId } } });
      return this.get(environment.baseUrl + '/pessoas/findOne?filter=' + query);
  }

  atualizarPessoa(pessoa) {
    return this.put(environment.baseUrl + '/pessoas', pessoa);
  }
}
