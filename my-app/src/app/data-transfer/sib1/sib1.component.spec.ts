import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sib1Component } from './sib1.component';

describe('Sib1Component', () => {
  let component: Sib1Component;
  let fixture: ComponentFixture<Sib1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sib1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sib1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
