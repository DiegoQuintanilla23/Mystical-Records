import { Component } from '@angular/core';
import {
  ActivatedRoute,
  RouterOutlet,
  Router,
  NavigationEnd,
} from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgIf } from '@angular/common';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgIf,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Mystical-Records';
  public CurrentRoute: string = '';

  constructor(private router: Router, private UserService : UserService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.CurrentRoute = event.url;
        //console.log(this.CurrentRoute);
      }
    });
  }

  ngOnInit(): void {
    const images = ['bg1.png', 'bg2.png', 'bg3.png', 'bg4.png', 'bg5.png', 'bg6.png', 'bg7.png', 'bg8.png'];
    const randomImage = this.getRandomImage(images);
    document.body.style.backgroundImage = `url('assets/background/${randomImage}')`;
  }

  private getRandomImage(images: string[]): string {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  }
}
