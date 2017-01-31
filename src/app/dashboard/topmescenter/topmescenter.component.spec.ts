/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TopmescenterComponent } from './topmescenter.component';

describe('TopmescenterComponent', () => {
  let component: TopmescenterComponent;
  let fixture: ComponentFixture<TopmescenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopmescenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopmescenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
