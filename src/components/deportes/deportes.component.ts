import {Component, OnInit , DoCheck} from '@angular/core';

@Component({
    selector:"deportes-component",
    standalone:false,
    templateUrl:`/deportes.component.html`,
    styleUrl:`/deportes.component.css`
})


export class Deportes{  
    public deportes: Array<string>;
    public numeros: Array<number>;
    constructor(){
        this.deportes= ['Futbol', 'Baloncesto', 'Tenis', 'Rugby', 'Ciclismo'];
        this.numeros= [1,2,3,4,5,6,7,8,9,10];
    }

}