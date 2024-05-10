import { Component } from '@angular/core';
import { WishlistItemComponent } from '../../../components/user/wishlist-item/wishlist-item.component';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [WishlistItemComponent],
  templateUrl: './wishlist.page.html',
  styleUrl: './wishlist.page.css'
})
export class WishlistPage {

}
