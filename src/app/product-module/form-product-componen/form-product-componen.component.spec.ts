import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProductComponenComponent } from './form-product-componen.component';

describe('FormProductComponenComponent', () => {
  let component: FormProductComponenComponent;
  let fixture: ComponentFixture<FormProductComponenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormProductComponenComponent]
    });
    fixture = TestBed.createComponent(FormProductComponenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
