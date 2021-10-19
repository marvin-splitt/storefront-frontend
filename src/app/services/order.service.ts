import { Injectable } from '@angular/core';
import Order from '../../models/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orders: Order[] = [];

  constructor() { }

  addOrder = (order: Order) => {
    this.orders.push(order);
  }

  getOrder = (orderId: number) => {
    return this.orders.find(order => order.id === orderId) || null
  }
}
