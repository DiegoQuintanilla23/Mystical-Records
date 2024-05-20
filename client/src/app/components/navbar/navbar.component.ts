import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Classification } from '../../interfaces/classification.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIf, RouterLink, RouterLinkActive, NgFor],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() public Route: string = ""; 
  public classifications: Classification[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchClassif();
  }

  public fetchClassif(): void{
    this.http.get("http://localhost:8080/api/classifications").subscribe(
      {
        next:(response:any)=>{
          //console.log(response);
          this.classifications=response.result;
        },
        error:(error:any)=>{
          console.log(error);
        }
      }
    )
  }
}
