import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioVO } from '../../base/vo/usuario';
import { AuthService } from '../../base/util/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: UsuarioVO = new UsuarioVO();

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    if (this.authService.canActivate()) {
      this.router.navigate(['/dashboard']);
    }
  }

  goLogin() {
    this.authService.login(this.user);
  }

}
