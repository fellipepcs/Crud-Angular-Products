import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[] = []

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  redirect(): void{
    this.router.navigate(['/products/list'])
  }
}
