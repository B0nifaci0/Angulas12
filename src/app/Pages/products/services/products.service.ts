//importamos HttpClient
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//importamos observable
import { Observable } from 'rxjs';
//importamo nuestro product.interface
import { Product } from '../product/interfaces/product.interface';
//importacion de nuestro decorador

// decorador providerIn indica que este service va tener accesso en toda mi app service es una capa para manejar 
//datos que vendran de una api observable devuelve un flujo de datos es como promesas en js
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  //declaracion de url endpointapi
  private apiUrl = 'http://localhost:3000/products';
  constructor(private http:HttpClient ) {}

    getProducts():Observable<Product[]> {
      
        return this.http.get<Product[]>(this.apiUrl);
   }
}
