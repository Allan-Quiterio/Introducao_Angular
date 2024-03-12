import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

@NgModule({
  declarations: [CursosComponent, CursoDetalheComponent],
  imports: [CommonModule], // Os componentes/diretivas/pipes mais comuns ficarão disponíveis para os componentes declarados aqui, é parecido com o BrowserModule da raiz, porém só ele só pode ser usado na raiz, em modulos criados é utilizado o CommonModule
  exports: [CursosComponent],
})
export class CursosModule {}
