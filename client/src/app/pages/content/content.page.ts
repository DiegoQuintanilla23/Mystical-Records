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
  public query:string="";
  public idClasif:string="";
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.route.params.subscribe(params => {
      this.query = params['id'];
      if(this.query!='home'&&this.query!='all'&&this.query!='offers'){
        this.idClasif = this.query;
        this.query = 'classification';
      }
      //console.log(this.query);
    });
  }
}
