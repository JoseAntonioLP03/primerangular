import {Component, OnInit , DoCheck} from '@angular/core';

@Component({
    selector:"hooks-angular",
    standalone:false,
    templateUrl:`/hooksangular.component.html`,
})


export class HooksAngular implements OnInit{  
    constructor(){
        console.log("Constructor: Primer metodo de inicio de COMPONENT");
    }

    ngOnInit(): void {
        console.log("Soy OnInitit: despues del constructor");
    }
    ngDoCheck(): void {
        console.log("NgCheck: cambiando algo en el render");
    }
}