import { Component, NgModule } from '@angular/core';
import { ComponentFilhoComponent } from "../component-filho/component-filho.component";
import { NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-componente-pai',
  imports: [ComponentFilhoComponent,CommonModule],
  templateUrl: './componente-pai.component.html',
  styleUrl: './componente-pai.component.css'
})
export class ComponentePaiComponent {
  sobrenome = "Da silva"

  mostrarNomeCompleto(nomeCompleto : any){
    alert(`o nome completo é: ${nomeCompleto}`)
  }
}
