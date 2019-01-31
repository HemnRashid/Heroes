import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-heroes', // the component's CSS element selector
  templateUrl: './heroes.component.html', // the location of the component's template file.
  styleUrls: ['./heroes.component.css'] // the location of the component's private CSS styles
})
export class HeroesComponent implements OnInit {

  // property
  heroes: Hero[];  // heroes:any;

  // Instead of creating service with new, you'll rely on Angular dependency injection to inject it into the HeroesComponent constructor.
  // The parameter simultaneously defines a private heroService property and identifies it as a HeroService injection site.
  constructor(private heroService: HeroService) { }

  // using .subscribe to fetch the hero data since the metod using observable.
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(hereos => this.heroes = hereos);
  }

  //call getHeroes() inside the ngOnInit lifecycle hook 
  ngOnInit() {
    this.getHeroes();
  }

  // eventhandler
  // Add the following onSelect() method, which assigns the clicked hero from the template to the component's selectedHero.
  // onSelect(heroItem: Hero): void {
  //   this.selectedHero = heroItem;
  // }



}
