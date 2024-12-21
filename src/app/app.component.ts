import { Component } from '@angular/core';
import { PrimeiroComponentComponent } from "./primeiro-component/primeiro-componente.component";
import { SegundoComponentComponent } from "./segundo-component/segundo-component.component";
import { PipeCustomizadoComponent } from './pipe-customizado/pipe-customizado.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { FormsModule, NgModel } from '@angular/forms';
import { RenderizandoListasComponent } from './renderizando-listas/renderizando-listas.component';
import { NgFor } from '@angular/common';
import { ComponentPersonalizadoComponent } from "./component-personalizado/component-personalizado.component";
import { ComponentePaiComponent } from "./componente-pai/componente-pai.component";
import { ExemploServicos1Component } from "./exemplo-servicos1/exemplo-servicos1.component";


@Component({
  selector: 'app-root',
  imports: [PrimeiroComponentComponent, SegundoComponentComponent, PipeCustomizadoComponent, TwoWayDataBindingComponent, FormsModule, RenderizandoListasComponent, ComponentPersonalizadoComponent, ComponentePaiComponent, ExemploServicos1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fundamentos-angular';
}
