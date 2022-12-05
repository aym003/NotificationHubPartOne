import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public products: Product[] = [];
  private url = "https://localhost:7132/api/Product"
  constructor(private http: HttpClient) { }

   public get():Product[] { 
    this.http.get(this.url).subscribe(data=>{
      this.products=data as Product[];
      
      return this.products;
     });
     return this.products;
    } 
}
