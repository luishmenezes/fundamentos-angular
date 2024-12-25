import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclo-de-vida',
  imports: [CommonModule],
  templateUrl: './ciclo-de-vida.component.html',
  styleUrl: './ciclo-de-vida.component.css'
})
export class CicloDeVidaComponent implements OnInit{
 horario = new Date();
 timer: any = null!;
 
  ngOnInit(): void {
     console.log("o evento on init disparou");
     this.timer = setInterval(() => this.horario = new Date(), 1000)
 }
}
