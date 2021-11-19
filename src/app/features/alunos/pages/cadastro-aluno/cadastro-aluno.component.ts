import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Aluno } from '../../models/aluno.model';
import { AlunosService } from '../../services/alunos.service';

@Component({
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.scss']
})
export class CadastroAlunoComponent implements OnInit {

  aluno : Aluno = this.alunosServices.getDefaultAluno();

  constructor(
    private alunosServices: AlunosService,
    private router : Router) { }

  ngOnInit(): void {
  }

  createAluno(alunoForm : NgForm){
    const FormValue = alunoForm.value;
    this.aluno.nome = FormValue.nome;
    this.aluno.email = FormValue.email;
    this.aluno.senha = FormValue.senha;
    this.aluno.valorMensalidade = FormValue.valorMensalidade;

    this.alunosServices.createAluno(this.aluno);
    alert('Aluno adicionado com sucesso!');
    this.router.navigateByUrl('/alunos');
  }

}
