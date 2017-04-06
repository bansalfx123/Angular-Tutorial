import { Component, OnInit } from '@angular/core';

import { IProduct } from './product'; 
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})


export class ProductsComponent  implements OnInit {
  //private _productService;

  pageTitle = "Product List";
  imageWidth: number = 50;
  imageMargin: number =2;
  showImage: boolean = false;
  listFilter: string = '';
  errorMessage: string;

  products: IProduct[];

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  onRatingClicked(message: string): void{
      this.pageTitle = 'Product: ' + message;
  }

  ngOnInit(): void {
      this._productService.getProducts()
                        .subscribe(
                            products => this.products = products,
                        error => this.errorMessage = <any>error);
                        
  }

  constructor(private _productService: ProductService) {  }

}
