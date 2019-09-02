import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTacheComponent } from './form-tache.component';

describe('FormTacheComponent', () => {
  let component: FormTacheComponent;
  let fixture: ComponentFixture<FormTacheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTacheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
