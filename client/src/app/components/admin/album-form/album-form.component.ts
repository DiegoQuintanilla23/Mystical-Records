import { Component, NgModule } from '@angular/core';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-album-form',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './album-form.component.html',
  styleUrl: './album-form.component.css'
})
export class AlbumFormComponent {
  submitForm() {
    // Aquí va la lógica para enviar el formulario
    console.log('Formulario enviado');
  }
}
