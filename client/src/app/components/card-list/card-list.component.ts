import { Component, Input, SimpleChanges } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { HttpClient } from '@angular/common/http';
import { Album } from '../../interfaces/album.interface';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [CardComponent, NgFor],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent {
  @Input() public query: string = '';
  @Input() public idClasif: string = '';
  public Albums:Album[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.executeFetch();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['query']) {
      this.executeFetch();
    }
  }

  private executeFetch(): void {
    switch (this.query) {
      case 'home':
        this.fetchLatest20();
        break;
      case 'all':
        this.fetchAll();
        break;
      case 'offers':
        this.fetchOffers();
        break;
      case 'classification':
        this.fetchByClasif();
        break;
      default:
        console.log(`Unrecognized query value: ${this.query}`);
    }
  }

  public fetchLatest20(): void{
    this.http.get("http://localhost:8080/api/albums?latest=true").subscribe(
      {
        next:(response:any)=>{
          console.log(response);
          this.Albums=response.result;
        },
        error:(error:any)=>{
          console.log(error);
        }
      }
    )
  }

  public fetchAll(): void{
    this.http.get("http://localhost:8080/api/albums?latest=false").subscribe(
      {
        next:(response:any)=>{
          console.log(response);
          this.Albums=response.result;
        },
        error:(error:any)=>{
          console.log(error);
        }
      }
    )
  }

  public fetchOffers(): void{
    this.http.get("http://localhost:8080/api/albums/offers").subscribe(
      {
        next:(response:any)=>{
          console.log(response);
          this.Albums=response.result;
        },
        error:(error:any)=>{
          console.log(error);
        }
      }
    )
  }

  public fetchByClasif(): void{
    this.http.get("http://localhost:8080/api/albums/classification/"+this.idClasif).subscribe(
      {
        next:(response:any)=>{
          console.log(response);
          this.Albums=response.result;
        },
        error:(error:any)=>{
          console.log(error);
        }
      }
    )
  }

}
