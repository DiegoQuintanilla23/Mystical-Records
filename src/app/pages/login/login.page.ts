import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './login.page.html',
  styleUrl: './login.page.css'
})
export class LoginPage {
}
