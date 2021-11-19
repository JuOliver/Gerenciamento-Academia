import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router){

  }

  // se não tiver um aluno logado, retornar para a pagina de login
  canActivate(): boolean {
    const alunoStorage = sessionStorage.getItem('aluno');
    if(!alunoStorage){
      this.router.navigateByUrl('/login');
      return false;
    } else{
      return true;
    }
  }
  
}
