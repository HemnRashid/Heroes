import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes', // the component's CSS element selector
  templateUrl: './heroes.component.html', // the location of the component's template file.
  styleUrls: ['./heroes.component.css'] // the location of the component's private CSS styles
})
export class HeroesComponent implements OnInit {

  // property
  heroes = HEROES;
  selectedHero: Hero


  constructor() { }
  ngOnInit() { }


  // eventhandler
  // Add the following onSelect() method, which assigns the clicked hero from the template to the component's selectedHero.
  onSelect(heroItem: Hero): void {
    this.selectedHero = heroItem;
  }



}
