import { Component } from '@angular/core';
import { concatWith, takeUntil } from 'rxjs';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { SingalrService } from '../../services/singalr.service';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent {
  displayedColumns: string[] = ['productId', 'name', 'description', 'stock','price','subscribe'];
constructor(public productService: ProductService,private singlarService:SingalrService) {
  this.getProducts();
  this.singlarService.startConnection();
  this.singlarService.addProductListener();  
}
delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}
getProducts()
{
  this.productService.get()
}

subscribeToProduct(productId:string)
{
  this.singlarService.subscribeToProduct(productId);
}

}
