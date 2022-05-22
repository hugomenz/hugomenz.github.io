import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntComponent } from './int.component';

describe('IntComponent', () => {
  let component: IntComponent;
  let fixture: ComponentFixture<IntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
