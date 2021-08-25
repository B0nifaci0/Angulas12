import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {
//injectamos en el construtor nuestro service
  constructor() { }
// mandamos a llamar nuestro metodo que esta dentro de nuestro service
  ngOnInit(): void {
   
  }

}
