import { Component, OnInit } from '@angular/core';
import { AlunosService } from '../../services/alunos.service';

@Component({
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.scss']
})
export class CadastroAlunoComponent implements OnInit {

  constructor(private alunosServices: AlunosService) { }

  ngOnInit(): void {
  }

}
