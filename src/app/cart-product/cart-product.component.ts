import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import CartProduct from '../../models/CartProduct';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css']
})
export class CartProductComponent implements OnInit {

  @Input() product!: CartProduct;
  @Output() deleteProduct: EventEmitter<number> = new EventEmitter();
  @Output() updateTotal: EventEmitter<void> = new EventEmitter();

  productAmount: number = 1;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    console.log(this.product)
    this.productAmount = this.product.amount
  }

  removeProduct = () => {
    this.cartService.removeFromCart(this.product.id)
    this.deleteProduct.emit(this.product.id);
    this.updateTotal.emit()
  }

  updateAmount = (amount: number) => {
    this.cartService.updateAmount(this.product.id, amount);
    this.updateTotal.emit()
  }

}
