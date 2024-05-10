import { Component } from '@angular/core';
import { CardListComponent } from '../../../components/card-list/card-list.component';

@Component({
  selector: 'app-view-products',
  standalone: true,
  imports: [CardListComponent],
  templateUrl: './view-products.page.html',
  styleUrl: './view-products.page.css'
})
export class ViewProductsPage {

}
