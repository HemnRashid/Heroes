import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

// Why services
// Components shouldn't fetch or save data directly and they certainly shouldn't knowingly present fake data. 
// They should focus on presenting data and delegate data access to a service.

// Services are a great way to share information among classes that don't know each other.

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  
  // Angular will inject the singleton MessageService into that property when it creates the HeroService.
  constructor(private messageService:MessageService) { }
  
  //Observable is one of the key classes in the RxJS library.
  //HeroService.getHeroes() will return an Observable in part because it will eventually use the Angular HttpClient.get method to fetch the heroes and HttpClient.get() returns an Observable.
  // Observable.subscribe() is the critical difference.
  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
  
  
  // functionName() : ReturnType { ... }
  getHero(id:Number): Observable<Hero> {
    // TODO: send the message _after_ fetching the heroes
    //this.messageService.add('HeroService: fetched hero id=${id}'); 
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero=> hero.id===id));
  }
}
