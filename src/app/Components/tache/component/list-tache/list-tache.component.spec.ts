import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTacheComponent } from './list-tache.component';

describe('ListTacheComponent', () => {
  let component: ListTacheComponent;
  let fixture: ComponentFixture<ListTacheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTacheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
