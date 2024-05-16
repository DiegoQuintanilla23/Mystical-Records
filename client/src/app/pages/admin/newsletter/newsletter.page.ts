import { Component } from '@angular/core';
import { NewsletterTableComponent } from '../../../components/admin/newsletter-table/newsletter-table.component';

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [NewsletterTableComponent],
  templateUrl: './newsletter.page.html',
  styleUrl: './newsletter.page.css'
})
export class NewsletterPage {

}
