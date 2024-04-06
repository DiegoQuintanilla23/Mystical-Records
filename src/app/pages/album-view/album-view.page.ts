import { Component } from '@angular/core';
import { NewsletterComponent } from '../../components/newsletter/newsletter.component';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { CommentsSectionComponent } from '../../components/comments-section/comments-section.component';
import { SpotifyIframeComponent } from '../../components/spotify-iframe/spotify-iframe.component';

@Component({
  selector: 'app-album-view',
  standalone: true,
  imports: [NewsletterComponent,ProductCardComponent, CommentsSectionComponent, SpotifyIframeComponent],
  templateUrl: './album-view.page.html',
  styleUrl: './album-view.page.css'
})
export class AlbumViewPage {

}
