import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, NgFor, NgIf } from '@angular/common';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import {NzAvatarModule} from 'ng-zorro-antd/avatar';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { ProductFirstCategory } from '../product';
@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule,NgFor,NgIf,NzGridModule,NzCardModule,NzAvatarModule,RouterLink,RouterOutlet],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  // route:ActivatedRoute = inject(ActivatedRoute);
  // productId = -1;
  // constructor(){
  //   this.productId = Number(this.route.snapshot.params['id'])
  // }

  readonly url = "https://images.satu.kz/180596138_w600_h600_180596138.jpg"
  productFirstCat:ProductFirstCategory[] =[
    
      {
      id:1,
      name:"Naar",
      releasedYear:2022,
      new:false,
      mainProperty:"Fe",
      img:this.url

    },
    {
      id:2,
      name:"Shanuin",
      releasedYear:2021,
      new:false,
      mainProperty:"sulfate",
      img:this.url

    },
    {
      id:3,
      name:"Ustka",
      releasedYear:2023,
      new:true,
      mainProperty:"iron",
      img:this.url

    },
    {
      id:3,
      name:"Ustka",
      releasedYear:2023,
      new:true,
      mainProperty:"iron",
      img:this.url

    },
    {
      id:3,
      name:"Ustka",
      releasedYear:2023,
      new:true,
      mainProperty:"iron",
      img:this.url

    },
    {
      id:3,
      name:"Ustka",
      releasedYear:2023,
      new:true,
      mainProperty:"iron",
      img:this.url

    },
    {
      id:3,
      name:"Ustka",
      releasedYear:2023,
      new:true,
      mainProperty:"iron",
      img:this.url

    },
    {
      id:3,
      name:"Ustka",
      releasedYear:2023,
      new:true,
      mainProperty:"iron",
      img:this.url

    },
  ]
}
