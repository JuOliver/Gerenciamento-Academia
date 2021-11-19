import { Injectable } from '@angular/core';
import { Aluno } from '../models/aluno.model';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  alunos: Array <Aluno> =[
    {id: 1, nome: 'Nathan Carlos',
     email:'nathan@gmail.com',
     senha:'12345',
     valorMensalidade: 100, 
     dataUltimoPgto: '2021-07-23', 
     dataInclusaoSistema: '2021-07-01' 
    },
    {id: 2, nome: 'Amadeu Rodrigues', 
    email: 'deu@gmail.com',
    senha:'6789',
    valorMensalidade: 150, 
    dataUltimoPgto: '2021-07-01', 
    dataInclusaoSistema: '2021-07-29' 
    },
    {id: 3, nome: 'Lilica Rita', 
    email:'lilica@gmail.com',
    senha:'4567',
    valorMensalidade: 100, 
    dataUltimoPgto: '2021-06-20', 
    dataInclusaoSistema: '2021-05-01' 
    },
    {id: 4, nome: 'Ana Catarina',
    email:'catarina@gmail.com',
    senha:'nomefeio', 
    valorMensalidade: 150, 
    dataUltimoPgto: '2021-05-29', 
    dataInclusaoSistema: '2021-04-01' 
    }
  ]

  constructor() { }

  getAlunos(){
    return this.alunos;
  }

  getAlunoById(id : string){
    return this.alunos.find((item)=> item.id === parseInt(id));
  }

  getAlunoByEmailAndPassword(email:string, senha:string){
    return this.alunos.find((item)=> item.email === email && item.senha === senha);
  }

  getDefaultAluno(): Aluno{
    return{
     id: this.getNextId(),
     nome: '',
     email:'',
     senha:'',
     valorMensalidade:0,
     dataInclusaoSistema:moment().format('DD/MM/YYYY'),
     dataUltimoPgto:moment().format('DD/MM/YYYY') , 
    }
  }

  // cria um id 'dinamico'
  getNextId(){
    return (this.alunos[(this.alunos.length -1)].id +1);
  }

  createAluno(aluno : Aluno){
    this.alunos.push(aluno);
  }

}
