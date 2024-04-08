import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOrdersPage } from './view-orders.page';

describe('ViewOrdersPage', () => {
  let component: ViewOrdersPage;
  let fixture: ComponentFixture<ViewOrdersPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewOrdersPage]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewOrdersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
