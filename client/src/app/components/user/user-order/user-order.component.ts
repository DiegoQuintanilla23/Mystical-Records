import { Component } from '@angular/core';
import { CardComponent } from '../../card/card.component';

@Component({
  selector: 'app-user-order',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user-order.component.html',
  styleUrl: './user-order.component.css'
})
export class UserOrderComponent {

}
