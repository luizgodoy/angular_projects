import { Component, OnInit } from '@angular/core';
import { professores } from '../model/professores';

@Component({
  selector: 'spa-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  listaProfessores: professores[] = [ {id: '1', nome: 'Camila' }, {id: '2', nome: 'Heloísa' }, {id: '3', nome: 'Rosas' }, {id: '4', nome: 'Samira' } ];
  displayedColumns: string[] = ['Id', 'Nome'];

  constructor() { }

  ngOnInit(): void {
  }
}