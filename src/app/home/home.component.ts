import { Component, inject } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Product } from '../product';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import {NzAvatarModule} from 'ng-zorro-antd/avatar';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { ProductServiceService } from '../product-service.service';
import { HeroesComponent } from '../heroes/heroes.component';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-home',
  standalone:true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports:[CommonModule,NgFor,NgIf,NzGridModule,NzCardModule,NzAvatarModule,RouterLink,RouterOutlet,HeroesComponent,FooterComponent]
})

export class HomeComponent {
  

  products:Product[] = [];
  prodServ:ProductServiceService = inject(ProductServiceService);
  constructor(){
   this.products = this.prodServ.products
  }


  // ngOnInit(){
  //   this.getProducts()
  // }
  // getProducts(){
  //   this.products = this.prodSev.products
  // }

  // constructor(private prodSev:ProductServiceService){

  // }
 
}
