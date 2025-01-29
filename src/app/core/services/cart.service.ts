import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartItem } from '../models/cart-data-model';
import { Order } from '../models/order-data-model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private apiUrl = 'http://localhost:3OOO/cart';
  private cartItemsSubject: BehaviorSubject<CartItem[]> = new BehaviorSubject<CartItem[]>([]);

  constructor(private http: HttpClient) {
    this.loadCartFromServer();
  }

  getCartItems(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(this.apiUrl);
  }

  addToCart(cartItem: CartItem): Observable<CartItem> {
    return this.http.post<CartItem>(this.apiUrl, cartItem);
  }

  removeFromCart(cartItemId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${cartItemId}`);
  }

  // Mettez à jour le panier sur le serveur
  private loadCartFromServer(){
    this.getCartItems().subscribe(cartItems => {
      this.cartItemsSubject.next(cartItems);
    });
  }

  // Calculez le total du panier
  getTotal(cartItems: CartItem[]): number {
    return cartItems.reduce((acc, item) => acc + item.total, 0);
  }

  // Effacer le panier sur le serveur
  clearCart(): Observable<void> {
    return this.http.delete<void>(this.apiUrl);
  }

  // Ajouter une commande via json-server
  placeOrder(order: Order): Observable<any> {
    return this.http.post('http://localhost:3000/orders', order);
  }


}
