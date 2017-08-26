import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sib2Component } from './sib2.component';

describe('Sib2Component', () => {
  let component: Sib2Component;
  let fixture: ComponentFixture<Sib2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sib2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sib2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
