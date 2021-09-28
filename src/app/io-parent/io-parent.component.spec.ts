import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IOParentComponent } from './io-parent.component';

describe('IOParentComponent', () => {
  let component: IOParentComponent;
  let fixture: ComponentFixture<IOParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IOParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IOParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
