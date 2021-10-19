import CartProduct from "./CartProduct";

export default interface Order {
  id: number;
  customer: {
    name: string,
    address: string,
    city: string,
    creditCard: string
  };
  products: CartProduct[];
}
