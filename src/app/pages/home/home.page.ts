import { Component } from '@angular/core';
import { SliderComponent } from '../../components/slider/slider.component';
import { CardListComponent } from '../../components/card-list/card-list.component';
import { NewsletterComponent } from '../../components/newsletter/newsletter.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderComponent, CardListComponent, NewsletterComponent],
  templateUrl: './home.page.html',
  styleUrl: './home.page.css'
})
export class HomePage {

}
