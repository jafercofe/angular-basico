import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl:'heroe.component.html'
})

export class HeroeComponent{

    nombre:string = 'Ironman';
    edad:number = 45;

    acumular(param:number):void{
        this.edad= this.edad + param;   
        }

    cambiarNombre(): void{
        this.nombre = "AntMan";
    }

    get nombreCapitalizado(): string{
        return this.nombre.toUpperCase();
    }

}