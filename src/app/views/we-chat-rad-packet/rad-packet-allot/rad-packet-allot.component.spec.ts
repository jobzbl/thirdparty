/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RadPacketAllotComponent } from './rad-packet-allot.component';

describe('RadPacketAllotComponent', () => {
  let component: RadPacketAllotComponent;
  let fixture: ComponentFixture<RadPacketAllotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadPacketAllotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadPacketAllotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
