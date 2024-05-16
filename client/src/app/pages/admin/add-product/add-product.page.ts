import { Component } from '@angular/core';
import { AlbumFormComponent } from '../../../components/admin/album-form/album-form.component';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [AlbumFormComponent],
  templateUrl: './add-product.page.html',
  styleUrl: './add-product.page.css'
})
export class AddProductPage {

}
