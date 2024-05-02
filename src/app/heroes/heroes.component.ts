import { Component, inject, } from '@angular/core';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroService } from '../hero.service';
import { BATYRLAR, HEROES } from './mock-heroes';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [UpperCasePipe,FormsModule,NgFor,NgIf,HeroDetailComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  selectedHero?: Hero;
onSelect(hero: Hero): void {
  this.selectedHero = hero;
}
   heroes:Hero[] = [] ; 

   title:string = 'my money'


   tandalganBatyr?:Hero;
   batyrlar = BATYRLAR;
    
   tandau(erkek:Hero){
    this.tandalganBatyr = erkek;
   }


   ngOnInit():void{
    this.getHeroes()
   }

   getHeroes():void{
    this.heroes=this.heroService.getHeroes()
   }

   constructor(private heroService:HeroService){

   }



  // her:HeroService = inject(HeroService)
  
  //  constructor(){
  //   this.heroes = this.her.getHeroes()
  //  }
  
}

export interface Hero {
  id:number;
  name:string
}
