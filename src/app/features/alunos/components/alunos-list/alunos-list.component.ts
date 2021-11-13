import { Component, OnInit } from '@angular/core';
import { Aluno } from '../../models/aluno.model';
import { AlunosService } from '../../services/alunos.service';

@Component({
  selector: 'app-alunos-list',
  templateUrl: './alunos-list.component.html',
  styleUrls: ['./alunos-list.component.scss']
})
export class AlunosListComponent implements OnInit {

  alunos: Array<Aluno> = [];
  filteredAlunos: Array<Aluno> = [];

  constructor(private alunoService: AlunosService) { }

  ngOnInit(): void {
    this.alunos = this.alunoService.getAlunos();
    this.filteredAlunos = this.alunos;
  }

  searchByNome(event: any){
    const value = event.target.value;
    const filteredAlunos = this.alunos.filter((aluno)=> aluno.nome.toUpperCase().search(value.toUpperCase()) > -1);
    this.filteredAlunos = filteredAlunos;
  }

  searchById(event: any){
    const value = event.target.value;
    const filteredAlunos = this.alunos.filter((aluno)=> aluno.id == value);
    if(filteredAlunos.length === 0){
      return this.filteredAlunos = this.alunos;
    }
    return this.filteredAlunos = filteredAlunos;
  }

}
