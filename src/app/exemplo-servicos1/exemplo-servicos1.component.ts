import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exemplo-servicos1',
  imports: [FormsModule],
  templateUrl: './exemplo-servicos1.component.html',
  styleUrl: './exemplo-servicos1.component.css'
})
export class ExemploServicos1Component {
nome="";

adicionarNome(){
  alert(`o nome ${this.nome} foi adicionado !`)
}
}
