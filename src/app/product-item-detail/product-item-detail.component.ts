import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/Product';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {

  product: Product | null = null;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct = () => {
    const id = parseInt(this.route.snapshot.paramMap.get('id') || '', 10);
    this.productService.getProduct(id).subscribe(data => this.product = data);
  }

  goBack = () => {
    this.location.back();
  }

  

}
