import { Component } from '@angular/core';
import { MultiplicaPorPipe } from '../multiplica-por.pipe';

@Component({
  selector: 'app-pipe-customizado',
  imports: [MultiplicaPorPipe],
  templateUrl: './pipe-customizado.component.html',
  styleUrl: './pipe-customizado.component.css'
})
export class PipeCustomizadoComponent {

}
