import { Component } from '@angular/core';
import { NewsletterComponent } from '../../components/newsletter/newsletter.component';

@Component({
  selector: 'app-album-view',
  standalone: true,
  imports: [NewsletterComponent],
  templateUrl: './album-view.page.html',
  styleUrl: './album-view.page.css'
})
export class AlbumViewPage {

}
