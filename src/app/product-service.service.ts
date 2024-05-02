import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

   readonly url = "https://i.imgur.com/CzXTtJV.jpg"
    products:Product[] = [
    {
      id:0,
      name:"Yarner",
      releasedYear:2023,
      new:true,
      mainProperty:"sodium",
      img: this.url

    },
    {
      id:1,
      name:"Wash&Go",
      releasedYear:2022,
      new:false,
      mainProperty:"Fe",
      img:this.url

    },
    {
      id:2,
      name:"Warf",
      releasedYear:2021,
      new:false,
      mainProperty:"sulfate",
      img:this.url

    },
    {
      id:3,
      name:"Dus",
      releasedYear:2023,
      new:true,
      mainProperty:"iron",
      img:this.url

    },
    {
      id:4,
      name:"Whistner",
      releasedYear:2023,
      new:true,
      mainProperty:"alpha",
      img:this.url

    },
    {
      id:5,
      name:"Mif",
      releasedYear:2023,
      new:true,
      mainProperty:"norenium",
      img:this.url

    },
    {
      id:6,
      name:"Basker",
      releasedYear:2023,
      new:true,
      mainProperty:"HN",
      img:this.url

    }
  ]

  
  getProductsbyId(id:number):Product | undefined { 
    return this.products.find(prod=>prod.id === id)
  }
  constructor() { }
}
