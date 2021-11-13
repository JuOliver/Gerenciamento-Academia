import { Injectable } from '@angular/core';
import { Aluno } from '../models/aluno.model';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  alunos: Array <Aluno> =[
    {id: 1, nome: 'Nathan Carlos', valorMensalidade: 100, dataUltimoPgto: '2021-07-23', dataInclusaoSistema: '2021-07-01' },
    {id: 2, nome: 'Amadeu Rodrigues', valorMensalidade: 150, dataUltimoPgto: '2021-07-01', dataInclusaoSistema: '2021-07-29' },
    {id: 3, nome: 'Lilica Rita', valorMensalidade: 100, dataUltimoPgto: '2021-06-20', dataInclusaoSistema: '2021-05-01' },
    {id: 4, nome: 'Ana Catarina', valorMensalidade: 150, dataUltimoPgto: '2021-05-29', dataInclusaoSistema: '2021-04-01' }
  ]

  constructor() { }

  getAlunos(){
    return this.alunos;
  }

  getAlunoById(id : string){
    return this.alunos.find((item)=> item.id === parseInt(id));
  }
}
