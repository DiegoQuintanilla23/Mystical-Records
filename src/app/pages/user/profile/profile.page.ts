import { Component } from '@angular/core';
import { UserFormComponent } from '../../../components/user/user-form/user-form.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [UserFormComponent],
  templateUrl: './profile.page.html',
  styleUrl: './profile.page.css'
})
export class ProfilePage {

}
