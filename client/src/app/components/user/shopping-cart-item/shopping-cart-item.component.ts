import { Component } from '@angular/core';
import { CardComponent } from '../../card/card.component';

@Component({
  selector: 'app-shopping-cart-item',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './shopping-cart-item.component.html',
  styleUrl: './shopping-cart-item.component.css'
})
export class ShoppingCartItemComponent {

}
