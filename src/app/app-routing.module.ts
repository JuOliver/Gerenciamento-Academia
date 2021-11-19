import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunoDetailsComponent } from './features/alunos/pages/aluno-details/aluno-details.component';
import { AlunoPageComponent } from './features/alunos/pages/aluno-page/aluno-page.component';
import { CadastroAlunoComponent } from './features/alunos/pages/cadastro-aluno/cadastro-aluno.component';
import { CadastroPageComponent } from './features/login/pages/cadastro-page/cadastro-page.component';
import { LoginPageComponent } from './features/login/pages/login-page/login-page.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'login'},
  {path:'login', component: LoginPageComponent},
  {path:'cadastro', component: CadastroPageComponent},
  {path:'alunos', component: AlunoPageComponent, canActivate: [AuthGuard]},
  {path:'aluno-details/:id', component: AlunoDetailsComponent, canActivate: [AuthGuard]},
  {path:'cadastro-aluno', component: CadastroAlunoComponent, canActivate: [AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
