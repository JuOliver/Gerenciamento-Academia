import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aluno } from 'src/app/features/alunos/models/aluno.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  aluno?: Aluno;

  constructor(private router: Router) { }

  ngOnInit(): void {
    const alunoStorage = sessionStorage.getItem('aluno');
    if(alunoStorage){
      this.aluno = JSON.parse(alunoStorage);
    }
  }

  exit(){
    sessionStorage.clear();
    this.router.navigateByUrl('/login');
  }

}
