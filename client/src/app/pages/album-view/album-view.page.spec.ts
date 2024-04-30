import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumViewPage } from './album-view.page';

describe('AlbumViewPage', () => {
  let component: AlbumViewPage;
  let fixture: ComponentFixture<AlbumViewPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumViewPage]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlbumViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
