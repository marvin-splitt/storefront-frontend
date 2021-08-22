import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent implements OnInit {

  firstName: string = '';
  lastName: string = '';
  street: string = '';
  streetNumber: string = '';
  postalCode: string = '';
  city: string = '';
  creditCard: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onCheckout = () => {
    
  }

}
