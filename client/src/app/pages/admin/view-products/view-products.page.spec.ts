import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductsPage } from './view-products.page';

describe('ViewProductsPage', () => {
  let component: ViewProductsPage;
  let fixture: ComponentFixture<ViewProductsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewProductsPage]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewProductsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
