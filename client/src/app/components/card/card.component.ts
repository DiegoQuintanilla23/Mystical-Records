import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Album } from '../../interfaces/album.interface';
import { NgIf } from '@angular/common';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink, NgIf],
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

  constructor( public UserService : UserService){}

}
