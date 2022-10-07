import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
 
  heroes:string[] = ['AntMan','Goku','Naruto','Tanjiro'];
  heroes2:string[]=[];

  borrar():void{

    //this.heroes.length = this.heroes.length - 1;
    const heroeBorrado = this.heroes.shift();

    if(heroeBorrado)
    this.heroes2.push(heroeBorrado?.toString());
  }

}
