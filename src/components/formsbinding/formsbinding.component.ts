import {Component, OnInit , DoCheck} from '@angular/core';

@Component({
    selector:"formsbinding-component",
    standalone:false,
    templateUrl:`/formsbinding.component.html`,
    styleUrl:`/formsbinding.component.css`
})


export class FormsBinding{ 
    public user: any;
    public mensaje: string; 
    constructor(){
        this.mensaje="";
        this.user={
            nombre:"",
            apellidos:"",
            edad: 0
        }
    }

    recibirDatos():void{
        this.mensaje="Datos recibidos correctamente";
    }
}