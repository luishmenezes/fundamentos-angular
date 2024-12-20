import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-segundo-component',
  imports: [CommonModule],
  templateUrl: './segundo-component.component.html',
  styleUrl: './segundo-component.component.css'
})
export class SegundoComponentComponent {
  nome = "Luis";
}
