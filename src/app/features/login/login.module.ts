import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroPageComponent } from './pages/cadastro-page/cadastro-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    CadastroPageComponent,
    LoginPageComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
})
export class LoginModule { }
