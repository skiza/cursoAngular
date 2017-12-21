import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, HeroesService } from './../../services/heroes.service';



@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})

export class HeroeComponent {

  heroe:any = {};

  constructor( private _activatedRoute:ActivatedRoute , private _heroesService:HeroesService) {
    this._activatedRoute.params.subscribe( _params => {
       console.log( _params['id_heroe'] ) ;
       this.heroe = this._heroesService.getHeroe( _params['id_heroe'] );

      //  console.log(this.heroe);
      
      } 
    ) 
    // el nombre de la variable "id" se define en el archivo de rutas

    
  }

}
