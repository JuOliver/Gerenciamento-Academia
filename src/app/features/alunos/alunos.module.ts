import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunoComponent } from './components/aluno/aluno.component';
import { AlunosListComponent } from './components/alunos-list/alunos-list.component';
import { AlunoPageComponent } from './pages/aluno-page/aluno-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AlunoDetailsComponent } from './pages/aluno-details/aluno-details.component';
import { CadastroAlunoComponent } from './pages/cadastro-aluno/cadastro-aluno.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AlunoComponent,
    AlunosListComponent,
    AlunoPageComponent,
    AlunoDetailsComponent,
    CadastroAlunoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    AlunosListComponent,
  ]
})
export class AlunosModule { }
