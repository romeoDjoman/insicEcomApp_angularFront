export interface OrderItem {
    productId: string;
    productName: string;   
    quantity: number;      
    price: number;         
    total: number;         
    image: string;         
    type: 'article' | 'journal'; 
  }

  export interface Order {
    orderId: string;          
    userId: string;           
    items: OrderItem[];       
    billingAddress: Address;  
    shippingAddress: Address; 
    paymentMethod: string;    
    shippingMethod: string;   
    orderStatus: string;       
    createdAt: string;        
  }
  
  export interface Address {
    firstName: string;  
    lastName: string;   
    address: string;    
    city: string;       
    state: string;      
    zip: string;        
    country: string;    
    phone: string;      
  }
  