import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Album } from '../../interfaces/album.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input()
  public album: Album = {
    _id:'',
    idclassification:'',
    name:'',
    artist:'',
    genre:'',
    description:'',
    quantity:0,
    format:'',
    price:0,
    releaseYear:0,
    addedDate:new Date(),
    image:'',
    discount:0
  };

}
