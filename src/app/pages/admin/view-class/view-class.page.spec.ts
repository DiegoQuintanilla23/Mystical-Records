import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewClassPage } from './view-class.page';

describe('ViewClassPage', () => {
  let component: ViewClassPage;
  let fixture: ComponentFixture<ViewClassPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewClassPage]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewClassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
