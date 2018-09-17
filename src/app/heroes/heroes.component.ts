import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { LIST } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  detail: Hero = {
    id: 1,
    name: 'Sasuke'
  };
  
  selectedname: Hero;

  onSelect(detail: Hero): void {
    this.selectedname = detail;
  }


 details: Hero[];

 getHeroes(): void {
   this.heroService.getHeroes()
    .subscribe(details => this.details = details);
 }

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

}
