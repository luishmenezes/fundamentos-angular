import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, NgModule, Output } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';


@Component({
  selector: 'app-component-filho',
  imports: [CommonModule,FormsModule],
  templateUrl: './component-filho.component.html',
  styleUrl: './component-filho.component.css'
})
export class ComponentFilhoComponent {
@Input() sobrenome ="";
@Output() mostraNome = new EventEmitter;

nome="";
}
