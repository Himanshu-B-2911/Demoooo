import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiCalssComponent } from './api-calss.component';

describe('ApiCalssComponent', () => {
  let component: ApiCalssComponent;
  let fixture: ComponentFixture<ApiCalssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiCalssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiCalssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
