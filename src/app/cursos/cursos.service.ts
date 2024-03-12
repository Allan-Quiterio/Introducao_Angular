import { Injectable } from '@angular/core';

// Decorator Injectable diz que essa classe é um Service e que ela pode ser injetada em outras classes, ou seja, ocorre a Injeção de Dependências
@Injectable({
  providedIn: 'root',
})
export class CursosService {
  constructor() {}

  getCursos() {
    return ['Angular', 'TypeScript', 'Java'];
  }
}
