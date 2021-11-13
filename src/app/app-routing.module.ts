import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunoPageComponent } from './features/alunos/pages/aluno-page/aluno-page.component';
import { CadastroPageComponent } from './features/login/pages/cadastro-page/cadastro-page.component';
import { LoginPageComponent } from './features/login/pages/login-page/login-page.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'login'},
  {path:'login', component: LoginPageComponent},
  {path:'cadastro', component: CadastroPageComponent},
  {path:'alunos', component: AlunoPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
