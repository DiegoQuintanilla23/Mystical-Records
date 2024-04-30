import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {
  @Input() public slides: any[] = [];
  public currentSlide: any = 0;

  public next(){
    this.currentSlide = (this.currentSlide + 1) %this.slides.length;
  }

  public prev(){
    this.currentSlide = (this.currentSlide - 1+ this.slides.length) %this.slides.length;
  }
}
