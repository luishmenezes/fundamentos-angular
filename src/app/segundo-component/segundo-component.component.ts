import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';






@Component({
  selector: 'app-segundo-component',
  imports: [CommonModule],
  templateUrl: './segundo-component.component.html',
  styleUrl: './segundo-component.component.css'
})
export class SegundoComponentComponent {
  nome = "Luis Henrique";
  dataNascimento = "04/09/1999";
  urlImagem = "/assets/images/pombo.jpg";

  mostrarDataNascimento(){
    alert(`a data de nascimento de ${this.nome} é ${this.dataNascimento}`)
  }
}
