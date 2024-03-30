import { Component } from '@angular/core';
import { CardListComponent } from '../../components/card-list/card-list.component';
import { NewsletterComponent } from '../../components/newsletter/newsletter.component';
import { NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [NgIf,CardListComponent, NewsletterComponent],
  templateUrl: './content.page.html',
  styleUrl: './content.page.css'
})
export class ContentPage {
  public CurrentRoute : string = "";
  constructor(private route: ActivatedRoute) {
    this.CurrentRoute = this.route.snapshot.url.join('/');
  }
}
