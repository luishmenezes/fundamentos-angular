import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-component-personalizado',
  imports: [],
  templateUrl: './component-personalizado.component.html',
  styleUrl: './component-personalizado.component.css'
})
export class ComponentPersonalizadoComponent {
@Input() nome = ""
@Input() sobrenome = ""
}
