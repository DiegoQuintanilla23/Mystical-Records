import { Component } from '@angular/core';
import { ProductCardComponent } from '../../../components/product-card/product-card.component';

@Component({
  selector: 'app-view-album',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './view-album.page.html',
  styleUrl: './view-album.page.css'
})
export class ViewAlbumPage {

}
