import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../core/services/cart.service';
import { CartItem } from '../../../core/models/cart-data-model';

@Component({
  selector: 'app-cart-list',
  standalone: true,
  imports: [],
  templateUrl: './cart-list.component.html',
  styleUrl: './cart-list.component.css'
})
export class CartListComponent implements OnInit {
  cartItems: CartItem[] = [];
  total: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.getCartItems().subscribe(items => {
      this.cartItems = items;
      this.total = this.cartService.getTotal(items);
    });
  }

  removeFromCart(itemId: number) {
    this.cartService.removeFromCart(itemId).subscribe(() => {
      this.cartItems = this.cartItems.filter(item => item.productId !== itemId);
      this.total = this.cartService.getTotal(this.cartItems);
    });
  }

  clearCart() {
    this.cartService.clearCart().subscribe(() => {
      this.cartItems = [];
      this.total = 0;
    });
  }
}