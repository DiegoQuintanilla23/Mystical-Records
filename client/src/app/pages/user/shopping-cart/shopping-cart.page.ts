import { Component } from '@angular/core';
import { ShoppingCartItemComponent } from '../../../components/user/shopping-cart-item/shopping-cart-item.component';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [ShoppingCartItemComponent],
  templateUrl: './shopping-cart.page.html',
  styleUrl: './shopping-cart.page.css'
})
export class ShoppingCartPage {

}
