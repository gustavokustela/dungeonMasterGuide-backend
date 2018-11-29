import { Injectable } from '@angular/core';
import { BaseService } from '../../../base/util/base.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class BuscaUsuarioService extends BaseService {

  email: string;

  constructor(public http: HttpClient, public snackBar: MatSnackBar) { super(http, snackBar); }

  recuperarUsuarios() {
    return this.get(environment.baseUrl + '/pessoas');
  }

  addUsuarioMesa(mesa) {
    return this.put(environment.baseUrl + '/Mesas', mesa);
  }

}
