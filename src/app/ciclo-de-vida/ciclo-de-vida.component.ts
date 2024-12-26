import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { setInterval } from 'node:timers';

@Component({
  selector: 'app-ciclo-de-vida',
  imports: [CommonModule],
  templateUrl: './ciclo-de-vida.component.html',
  styleUrl: './ciclo-de-vida.component.css'
})
export class CicloDeVidaComponent implements OnInit, OnChanges, OnDestroy{
 horario = new Date();
 timer: any = null!;
 
 @Input() texto = "";

  ngOnInit(): void {
     console.log("o evento OnInit disparou");
     this.timer = setInterval(() => this.horario = new Date(), 1000);
 }
 
 ngOnChanges(changes: SimpleChanges): void {
     console.log(changes)
 }

 ngOnDestroy():void{
  clearInterval(this.timer);
 }
}
