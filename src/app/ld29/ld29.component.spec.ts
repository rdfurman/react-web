import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LD29Component } from './ld29.component';

describe('LD29Component', () => {
  let component: LD29Component;
  let fixture: ComponentFixture<LD29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LD29Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LD29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
