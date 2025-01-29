export interface CheckoutItem {
    productId: string;
    productName: string;
    quantity: number;
    price: number;
    total: number;
    image: string;
    type: 'article' | 'journal';
  }
  
  export interface Checkout {
    userId: string;
    cartId: string;
    items: CheckoutItem[];
    billingAddress: Address;
    shippingAddress: Address;
    paymentDetails: PaymentDetails;
    shippingMethod: string;
    discountCode: string;
    totalAmount: number;
  }
  
  export interface Address {
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    zip: string;
    country: string;
    phone: string;
  }
  
  export interface PaymentDetails {
    cardType: string;
    cardNumber: string;
    expiryDate: string;
    cvv: string;
  }
  