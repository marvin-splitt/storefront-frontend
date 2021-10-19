import { Injectable } from '@angular/core';
import CartProduct from '../../models/CartProduct';
import { Product } from '../../models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: CartProduct[] = JSON.parse(sessionStorage.getItem('storefront-cart') || '[]');

  constructor() { }

  addToCart = (product: Product, amount: number): void => {

    const existingProductIndex = this.cart.findIndex(cProd => cProd.id === product.id);

    if (existingProductIndex !== -1) {
      const updatedAmount = this.cart[existingProductIndex].amount + amount
      this.cart[existingProductIndex] = {
        ...product,
        amount: updatedAmount
      }
      alert(`Updated amount of product: ${product.name} - new amount: ${updatedAmount}`)
      return;
    }

    this.cart.push({
      ...product,
      amount: amount
    })

    sessionStorage.setItem('storefront-cart', JSON.stringify(this.cart));
    alert(`Added product to cart: ${product.name} - amount: ${amount}`)
  }

  removeFromCart = (id: number): void => {
    this.cart = this.cart.filter(cProd => cProd.id !== id);
    sessionStorage.setItem('storefront-cart', JSON.stringify(this.cart));
  }

  updateAmount = (id: number, amount: number): void => {
    this.cart = this.cart.map((cProd) => {
      if (cProd.id === id) {
        return {
          ...cProd,
          amount: amount
        }
      }
      return cProd
    })
    sessionStorage.setItem('storefront-cart', JSON.stringify(this.cart));
  }

  getCartProducts = (): CartProduct[] => {
    return this.cart;
  }

  clearCart = () => {
    this.cart = [];
    sessionStorage.removeItem('storefront-cart');
  }
}
