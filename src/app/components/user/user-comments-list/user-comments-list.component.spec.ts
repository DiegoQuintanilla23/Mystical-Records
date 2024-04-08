import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCommentsListComponent } from './user-comments-list.component';

describe('UserCommentsListComponent', () => {
  let component: UserCommentsListComponent;
  let fixture: ComponentFixture<UserCommentsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserCommentsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserCommentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
