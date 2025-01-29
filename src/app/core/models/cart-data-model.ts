// CartItem adapté pour les journaux et articles
export interface CartItem {
    productId: number;  
    productName: string; 
    quantity: number;   
    price: number;      
    total: number;      
    image: string;      
    type: 'article' | 'journal'; 
 }

 export interface Cart {
    cartId: string;    
    userId: string;    
    items: CartItem[]; 
    subtotal: number;  
    shippingCost: number; 
    discount: number;   
    total: number;     
  }
  