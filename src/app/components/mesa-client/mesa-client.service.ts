import { Injectable } from '@angular/core';
import { BaseService } from '../../base/util/base.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class MesaClientService extends BaseService {

  constructor(public http: HttpClient, public snackBar: MatSnackBar) { super(http, snackBar); }

  recuperarMesa() {
    const currentUserId = JSON.parse(localStorage.getItem('currentUser')).userId;
    const query = JSON.stringify({'where' : { 'idMestre' : { 'like' : currentUserId } } });
    return this.get(environment.baseUrl + '/mesas?filter=' + query);
  }

  recuperarMesasParticipante() {
    const currentUserId = JSON.parse(localStorage.getItem('currentUser')).userId;
    // {
    //   "jogadores": [
    //     {"User":"5bd39830927a584170611f58"}
    //   ]
    // }
    const query = JSON.stringify({'where' : { 'jogadores.userId' : { 'like' : currentUserId } } });
    return this.get(environment.baseUrl + '/mesas?filter=' + query);
  }

}
