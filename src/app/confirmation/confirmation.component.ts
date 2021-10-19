import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Order from '../../models/Order';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  order: Order | null = null;

  constructor(private route: ActivatedRoute, private orderService: OrderService) { }

  ngOnInit(): void {
    this.getOrder()
  }

  getOrder = () => {
    const id = parseInt(this.route.snapshot.paramMap.get('id') || '', 10);
    this.order = this.orderService.getOrder(id);
  }

}
