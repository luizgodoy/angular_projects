import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { alunos } from '../model/alunos'

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  valor: number = 0;
  exibeTabela:  boolean = true;

  listaAlunos: alunos[] = [
    { nome: 'Sofia', idade: 7, email: 'sofia@email.com.br', curso: 'Jardim I' },
    { nome: 'Manu', idade: 5, email: 'Teste@gmail.com', curso: 'Maternal II' },
    { nome: 'Heitor', idade: 1, email: 'Teste2@gmail.com', curso: 'Primeira série' },
    { nome: 'Alice', idade: 5, email: 'Teste3@gmail.com', curso: 'Segunda série' }
  ];

  displayedColumns: string[] = ['Nome', 'Idade', 'E-mail', 'Curso'];

  ngOnInit(): void {
    this.valor = 4;
  }

  mudarValor() {
    this.valor++;
  }

  reiniciarValor() {
    this.valor = 0;
  }

  exibirTabela()
  {
    this.exibeTabela = !this.exibeTabela;
  }
}