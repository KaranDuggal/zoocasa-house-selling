import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPropertyComponent } from './get-property.component';

describe('GetPropertyComponent', () => {
  let component: GetPropertyComponent;
  let fixture: ComponentFixture<GetPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetPropertyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
