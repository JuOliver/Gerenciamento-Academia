import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlunosService } from 'src/app/features/alunos/services/alunos.service';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  email: string = "";
  senha: string = "";
  erro: boolean = false;

  constructor(
    private alunosService: AlunosService,
    private router: Router) { }

  ngOnInit(): void {
  }

  authentication(){
    const aluno = this.alunosService.getAlunoByEmailAndPassword(this.email,this.senha);
    if(!aluno){
      this.erro = true;
    } else{
      sessionStorage.setItem('aluno', JSON.stringify(aluno));
      this.router.navigateByUrl('/alunos');
    }
  }

}
