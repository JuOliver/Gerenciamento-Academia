import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunoComponent } from './components/aluno/aluno.component';
import { AlunosListComponent } from './components/alunos-list/alunos-list.component';
import { AlunoPageComponent } from './pages/aluno-page/aluno-page.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    AlunoComponent,
    AlunosListComponent,
    AlunoPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    AlunosListComponent
  ]
})
export class AlunosModule { }
