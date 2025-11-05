import {Component, OnInit , DoCheck} from '@angular/core';

@Component({
    selector:"deportesv2-component",
    standalone:false,
    templateUrl:`/deportesv2.component.html`,
    styleUrl:`/deportesv2.component.css`
})


export class Deportesv2{  
    public deportes: Array<string>;
    public numeros: Array<number>;
    constructor(){
        this.deportes= ['Futbol', 'Baloncesto', 'Tenis', 'Rugby', 'Ciclismo'];
        this.numeros= [1,2,3,4,5,6,7,8,9,10];
    }

}