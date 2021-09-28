import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IOChildComponent } from './io-child.component';

describe('IOChildComponent', () => {
  let component: IOChildComponent;
  let fixture: ComponentFixture<IOChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IOChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IOChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
