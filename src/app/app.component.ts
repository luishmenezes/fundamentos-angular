import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeiroComponentComponent } from "./primeiro-component/primeiro-componente.component";
import { SegundoComponentComponent } from "./segundo-component/segundo-component.component";

@Component({
  selector: 'app-root',
  imports: [PrimeiroComponentComponent, SegundoComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fundamentos-angular';
}
