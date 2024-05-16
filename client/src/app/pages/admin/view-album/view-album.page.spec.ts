import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAlbumPage } from './view-album.page';

describe('ViewAlbumPage', () => {
  let component: ViewAlbumPage;
  let fixture: ComponentFixture<ViewAlbumPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewAlbumPage]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewAlbumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
