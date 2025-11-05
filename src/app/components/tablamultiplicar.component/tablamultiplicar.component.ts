import { Component } from '@angular/core';
import { ViewChild , ElementRef } from '@angular/core';

@Component({
  selector: 'tablamultiplicar-component',
  standalone: false,
  templateUrl: './tablamultiplicar.component.html',
  styleUrl: './tablamultiplicar.component.css',
})
export class TablamultiplicarComponent {

    public numero: number;
    public resultados: Array<number> = [];
    constructor(){
        //EN ANGULAR , AUNQUE SEAN REFERENCIAS , TODAS LAS VARIABLES TIENE QUE SER INSTANCIADAS
        this.numero=0;
    }

    multiplicarNumero():void{
        for(let i=1; i<=10; i++){
            this.resultados.push(this.numero * i);
        }
    }
}
