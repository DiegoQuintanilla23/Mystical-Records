import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-album',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './edit-album.page.html',
  styleUrl: './edit-album.page.css'
})
export class EditAlbumPage {
  submitForm() {
    // Aquí va la lógica para enviar el formulario
    console.log('Formulario enviado');
  }
}
