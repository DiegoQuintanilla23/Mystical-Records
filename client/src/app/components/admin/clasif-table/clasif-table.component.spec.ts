import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasifTableComponent } from './clasif-table.component';

describe('ClasifTableComponent', () => {
  let component: ClasifTableComponent;
  let fixture: ComponentFixture<ClasifTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClasifTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClasifTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
