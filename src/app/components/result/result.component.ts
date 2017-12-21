import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService , Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-result',
  templateUrl: './result.component.html'
})

export class ResultComponent implements OnInit {

  heroes:any[] = [];
  termino:string = "";

  constructor( 
    private _activatedRoute:ActivatedRoute  , 
    private _heroesService:HeroesService ,  
    private _router:Router
  ) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(
      _params => {
        this.termino = _params['user_search'];
        this.heroes = this._heroesService.buscarHeroe(_params['user_search']);

        console.log(this.heroes);
      }
    );
  }

  goToHeroe( index:number ){
    this._router.navigate(['/heroe' , index]);
  }

}
