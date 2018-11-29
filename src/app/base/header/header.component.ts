import { Component, OnInit } from '@angular/core';
import { AuthService } from '../util/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loginUser = false;

  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.recuperaLogin();
  }


recuperaLogin() {
  if (this.authService.canActivate()) {
    // this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.loginUser = true;
  }
  this.loginUser = false;
}

    loginUsuario() {
      this.loginUser = true;
    }

    logoutUsuario() {
      this.loginUser = null;
    }

  }
