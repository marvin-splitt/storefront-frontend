import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/Product';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {

  productAmount: number = 1;

  product: Product | null = null;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private productService: ProductService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.getProduct();
  }

  addToCart = () => {
    if (this.product) {
      this.cartService.addToCart(this.product, this.productAmount);
    }
  }

  getProduct = () => {
    const id = parseInt(this.route.snapshot.paramMap.get('id') || '', 10);
    this.productService.getProduct(id).subscribe(data => this.product = data);
  }

  goBack = () => {
    this.location.back();
  }
}
