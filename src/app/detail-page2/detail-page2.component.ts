import { Component, inject } from '@angular/core';
import { Product } from '../product';
import { ProductServiceService } from '../product-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-page2',
  standalone: true,
  imports: [],
  templateUrl: './detail-page2.component.html',
  styleUrl: './detail-page2.component.css'
})
export class DetailPage2Component {
    ro:ActivatedRoute = inject(ActivatedRoute)
    roId;
  checkout:number = 24;
  prod:Product[] = [];
  
  prods:ProductServiceService = inject(ProductServiceService)
  constructor(){
    this.prod = this.prods.products;
    this.roId = this.ro.snapshot.params['id'];

  }
}
