import { Component, OnInit } from '@angular/core';
// mandamos a llamar a nustro sericie
import { Product } from './product/interfaces/product.interface';
//importamos el service
import { ProductsService } from './services/products.service';

//importamos tap
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {

  products!: Product[];

  //injectamos en el construtor nuestro service
  constructor(private productSvc: ProductsService) { }
// mandamos a llamar nuestro metodo que esta dentro de nuestro service
  ngOnInit(): void {
    this.productSvc.getProducts()
    .pipe(
      tap((products: Product[])=> this.products = products)
    ).subscribe();
  }

}
