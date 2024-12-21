import { Component } from '@angular/core';
import { Celular } from '../types/Celular';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-renderizando-listas',
  imports: [NgFor,NgClass],
  templateUrl: './renderizando-listas.component.html',
  styleUrl: './renderizando-listas.component.css'
})
export class RenderizandoListasComponent {
  celulares: Celular[] = [
    {id: 1, nome: "Celular xl", descricao: "celular grande", esgotado: false},
    {id: 2, nome: "Celular xs", descricao: "celular medio", esgotado: false},
    {id: 3, nome: "Celular xd", descricao: "celular pequeno", esgotado: true}
  ]
}
