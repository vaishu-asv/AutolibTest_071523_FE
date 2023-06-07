import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatescheduleComponent } from './createschedule.component';

describe('CreatescheduleComponent', () => {
  let component: CreatescheduleComponent;
  let fixture: ComponentFixture<CreatescheduleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatescheduleComponent]
    });
    fixture = TestBed.createComponent(CreatescheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
