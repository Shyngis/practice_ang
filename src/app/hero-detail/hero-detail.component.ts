import { Component,Input } from '@angular/core';
import { Hero } from '../heroes/heroes.component';
import { NgIf } from '@angular/common';
import { UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [NgIf,UpperCasePipe,FormsModule],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent {
  @Input() erik?: Hero;
  @Input() atau?: string;
}
