import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aluno } from '../../models/aluno.model';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.scss']
})
export class AlunoComponent implements OnInit {

  @Input()
  card ?: Boolean;

  @Input()
  aluno ?: Aluno;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  memberDetails(){
    this.router.navigateByUrl(`aluno-details/${this.aluno?.id}`);
  }


}
