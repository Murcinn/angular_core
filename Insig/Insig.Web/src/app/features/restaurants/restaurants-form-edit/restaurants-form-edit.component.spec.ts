import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsFormEditComponent } from './restaurants-form-edit.component';

describe('RestaurantsFormEditComponent', () => {
  let component: RestaurantsFormEditComponent;
  let fixture: ComponentFixture<RestaurantsFormEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantsFormEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantsFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
