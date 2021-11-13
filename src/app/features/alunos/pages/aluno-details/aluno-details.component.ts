import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Aluno } from '../../models/aluno.model';
import { AlunosService } from '../../services/alunos.service';

@Component({
  templateUrl: './aluno-details.component.html',
  styleUrls: ['./aluno-details.component.scss']
})
export class AlunoDetailsComponent implements OnInit {

  aluno?: Aluno;

  constructor(
    private activateRoute : ActivatedRoute,
    private alunosService : AlunosService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params)=> {
      const aluno = this.alunosService.getAlunoById(params.id);
      this.aluno = aluno;
    })
  }

}
