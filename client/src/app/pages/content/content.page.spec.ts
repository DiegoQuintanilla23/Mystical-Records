import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPage } from './content.page';

describe('ContentPage', () => {
  let component: ContentPage;
  let fixture: ComponentFixture<ContentPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentPage]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
