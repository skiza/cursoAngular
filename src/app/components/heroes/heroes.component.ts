import { Component, OnInit } from '@angular/core';
import { HeroesService , Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  private heroes:Heroe[] = [];

  constructor( private _heroeService:HeroesService  , private _router:Router) {
    // console.log("constructor");
  }

  ngOnInit() {
    this.heroes = this._heroeService.getHeroes();
    // console.log(this.heroes);
  }

  goToHeroe( index:number ){
    this._router.navigate(['/heroe' , index]);
  }

 

}
