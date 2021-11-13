import { Component, Input, OnInit } from '@angular/core';
import { Aluno } from '../../models/aluno.model';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.scss']
})
export class AlunoComponent implements OnInit {

  @Input()
  aluno ?: Aluno;

  constructor() { }

  ngOnInit(): void {
  }

}
