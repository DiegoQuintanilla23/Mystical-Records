import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifyIframeComponent } from './spotify-iframe.component';

describe('SpotifyIframeComponent', () => {
  let component: SpotifyIframeComponent;
  let fixture: ComponentFixture<SpotifyIframeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpotifyIframeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpotifyIframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
