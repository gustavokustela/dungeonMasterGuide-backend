import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './base/util/auth.service';

// Materialize
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';


// Component
import { AppComponent } from './app.component';
// import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './base/header/header.component';
import { FooterComponent } from './base/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { MesaClientComponent } from './components/mesa-client/mesa-client.component';
import { NovaMesaComponent } from './components/mesa-client/nova-mesa/nova-mesa.component';
import { MesaDetalheComponent } from './components/mesa-client/mesa-detalhe/mesa-detalhe.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuarioConfigComponent } from './components/usuario/usuario-config/usuario-config.component';
import { EditaMesaComponent } from './components/mesa-client/edita-mesa/edita-mesa.component';
import { DeletaMesaComponent } from './components/mesa-client/deleta-mesa/deleta-mesa.component';
import { BuscaUsuarioComponent } from './components/usuario/busca-usuario/busca-usuario.component';
import { PerfilEditComponent } from './components/usuario/perfil-edit/perfil-edit.component';
import { MatListModule } from '@angular/material';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'cadastro',
    component: CadastroComponent,
  },

  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthService]
  },

  {
    path: 'mesas-participando',
    component: MesaClientComponent,
    canActivate: [AuthService]
  },

  {
    path: 'nova-mesa',
    component: NovaMesaComponent,
    canActivate: [AuthService]
  },

  {
    path: 'detalha-mesa',
    component: MesaDetalheComponent,
    canActivate: [AuthService]
  },

  {
    path: 'perfil',
    component: UsuarioComponent,
    canActivate: [AuthService]
  }

];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CadastroComponent,
    SideMenuComponent,
    MesaClientComponent,
    NovaMesaComponent,
    MesaDetalheComponent,
    UsuarioComponent,
    UsuarioConfigComponent,
    EditaMesaComponent,
    DeletaMesaComponent,
    BuscaUsuarioComponent,
    PerfilEditComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    // NoopAnimationsModule,
    RouterModule.forRoot(appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatInputModule,
    MatDividerModule,
    MatDialogModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatListModule,
    MatSelectModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    EditaMesaComponent,
    DeletaMesaComponent,
    BuscaUsuarioComponent,
    PerfilEditComponent
  ]
})
export class AppModule { }
