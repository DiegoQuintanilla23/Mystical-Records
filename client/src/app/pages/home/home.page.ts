import { Component } from '@angular/core';
import { SliderComponent } from '../../components/slider/slider.component';
import { CardListComponent } from '../../components/card-list/card-list.component';
import { NewsletterComponent } from '../../components/newsletter/newsletter.component';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderComponent, CardListComponent, NewsletterComponent],
  templateUrl: './home.page.html',
  styleUrl: './home.page.css'
})
export class HomePage {
  public slides: any[] = [
    {
      url: "assets/slider/s1.jpg",
      atr: "https://www.freepik.es/foto-gratis/vista-lateral-tiro-medio-hombre-joven-que-busca-vinilos-tienda_5075567.htm#fromView=search&page=1&position=1&uuid=9a836a97-7b05-4aa2-9ad2-1aba23aab4c2",
      title: "first",
      description: "LOREM IPSUM"
    },
    {
      url: "assets/slider/s2.jpg",
      atr: "https://www.freepik.es/foto-gratis/vista-lateral-tiro-medio-hombre-joven-que-busca-vinilos-tienda_5075567.htm#fromView=search&page=1&position=1&uuid=9a836a97-7b05-4aa2-9ad2-1aba23aab4c2",
      title: "first",
      description: "LOREM IPSUM"
    },
    {
      url: "assets/slider/s3.jpg",
      atr: "https://www.freepik.es/foto-gratis/vista-lateral-tiro-medio-hombre-joven-que-busca-vinilos-tienda_5075567.htm#fromView=search&page=1&position=1&uuid=9a836a97-7b05-4aa2-9ad2-1aba23aab4c2",
      title: "first",
      description: "LOREM IPSUM"
    }
  ];

  constructor( public UserService : UserService, private router: Router ){}

  ngOnInit() {
    if(this.UserService.ActiveUser.role=='admin')
    {
      this.router.navigate(['/dashboard/admin']);
    }
  }
}
