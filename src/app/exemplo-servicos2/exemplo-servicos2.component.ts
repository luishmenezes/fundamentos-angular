import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-exemplo-servicos2',
  imports: [FormsModule],
  templateUrl: './exemplo-servicos2.component.html',
  styleUrl: './exemplo-servicos2.component.css'
})
export class ExemploServicos2Component {
  descricao = "";

  constructor( public logger: LoggerService){}

  adicionarProduto(){
    this.logger.logar(`o produto com a descrição ${this.descricao} foi adicionado!`)
  }
}
