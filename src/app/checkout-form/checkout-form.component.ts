import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import CartProduct from '../../models/CartProduct';
import Order from '../../models/Order';
import { CartService } from '../services/cart.service';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent implements OnInit {

  @Input() products: CartProduct[] = []

  fullName: string = '';
  address: string = '';
  city: string = '';
  creditCard: string = '';

  constructor(private router: Router, private orderService: OrderService, private cartService: CartService) { }

  ngOnInit(): void {
  }

  onCheckout = () => {
    const orderId = Math.floor(Math.random() * (99999999 - 100) + 100)
    const newOrder: Order = {
      id: orderId,
      customer: {
        name: this.fullName,
        address: this.address,
        city: this.city,
        creditCard: this.creditCard,
      },
      products: this.products
    }
    this.orderService.addOrder(newOrder)
    this.cartService.clearCart()
    this.router.navigate([`/confirmation/${orderId}`]);
  }

}
