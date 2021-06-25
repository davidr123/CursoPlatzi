import { Injectable } from '@angular/core';
import { Product } from './product.model'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[]=[
    {
      id: '1',
      image:'assets/image/joao.jpg',
      tittle:'delantero',
      price:122000000,
      description:'Jugador creativo 20 años'
    },
    {
      id: '2',
      image:'assets/image/luis1.jpg',
      tittle:'delantero',
      price:6000000,
      description:'Jugador creativo 33 años'
    },
    {
      id: '3',
      image:'assets/image/marcos.jpg',
      tittle:'Centro Campista',
      price:1000000,
      description:'Jugador creativo 27 años'
    }

  ];

  constructor() { }

  getAllProducts(){
    return this.products;
  }

  getProduct(id: string){
return this.products.find(item => id === item.id);
  }
}
