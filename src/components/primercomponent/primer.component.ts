import {Component} from '@angular/core';

//UN COMPONENT DEBE TENER SIEMPRE LA DECLARACION DE SU CONTENIDO
@Component({
    //DEBEMOS DECLARAR EL NOMBRE DEL COMPONENTE
    //MEDIANTE SU SELECTOR HTML
    //EN ANGULAR , LOS SELECTORES LLEVAN GUION
    selector:"primer-component",
    standalone:false,
    //POR AHORA , USAREMOS HTML DENTRO DEL MISMO COMPONENTE
    templateUrl:`/primer.component.html`,
    styleUrl:`/primer.component.css`,
})

//CADA COMPONENT SIEMPRE DEBE TENER UNA CLASE ASOCIADA EN SU TS
//DICHO NOMBRE DE CLASE SI LLEVA MAYUSCULAR Y SE DECALARA DENTRO DE app-module.ts
export class PrimerComponent{  
    //AQUI ES DONDE SE DECALRAN LAS VARIABLES 
    //DICHAS VARIABLES DEBEN TENER UN TIPADO SIEMPRE (TypeScript)
    public titulo: string;
    public descripcion: string;
    public year: number;

    //EN ANGULAR , AL IGUAL QUE EN REACT , TENEMOS UN CONSTRUCTOR
    //EN DICHO CONSTRUCTOR INICIALIZAMOS LOS ELEMENTOS DE MI CLASE
    constructor(){
        this.titulo = "Angular";
        this.descripcion = "Mi primer componente de angular !!!";
        this.year = 2025;
    }
}