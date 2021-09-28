import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContentCardComponent } from './ng-content-card.component';

describe('NgContentCardComponent', () => {
  let component: NgContentCardComponent;
  let fixture: ComponentFixture<NgContentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgContentCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgContentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
