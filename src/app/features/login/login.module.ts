import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroPageComponent } from './pages/cadastro-page/cadastro-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CadastroPageComponent,
    LoginPageComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
})
export class LoginModule { }
