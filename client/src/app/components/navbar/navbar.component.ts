import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Classification } from '../../interfaces/classification.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIf, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() public Route: string = ""; 
  public classifications: Classification[] = [];

  constructor(private http: HttpClient) {}

  public fetchClassif(): void{
    const token = localStorage.getItem("AuthToken") ?? "";
  }
}
