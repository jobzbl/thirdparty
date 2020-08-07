/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SpradJsComponent } from './sprad-js.component';

describe('SpradJsComponent', () => {
  let component: SpradJsComponent;
  let fixture: ComponentFixture<SpradJsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpradJsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpradJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
