import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
})
export class CursosComponent implements OnInit {
  nomePortal: string;

  cursos: string[];

  // No Angular, a injeção de dependências é feita através do construtor da classe
  constructor(private cursosService: CursosService) {
    this.nomePortal = 'https://loiane.training';

    //Como está ocorrendo a injeção de dependências através do Service, não é necessário fazer a instanciação dessa forma
    // const service = new CursosService();

    this.cursos = this.cursosService.getCursos();
  }

  ngOnInit(): void {}
}
