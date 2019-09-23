import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../../services/heroes.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})

export class BusquedaComponent implements OnInit {

  heroes: Heroe[] = [];
  txtBusqueda: string = '';

  constructor( private _route: ActivatedRoute, private _heroesService: HeroesService ) {
    this._route.params.subscribe( params => {
      this.heroes = this._heroesService.buscarHeroes( params['txt'] );
      this.txtBusqueda = params['txt'];
      console.log(this.heroes);
    });
  }

  ngOnInit() {
  }

}
