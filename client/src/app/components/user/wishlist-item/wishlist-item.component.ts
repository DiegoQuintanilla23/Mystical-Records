import { Component } from '@angular/core';
import { CardComponent } from '../../card/card.component';

@Component({
  selector: 'app-wishlist-item',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './wishlist-item.component.html',
  styleUrl: './wishlist-item.component.css'
})
export class WishlistItemComponent {

}
