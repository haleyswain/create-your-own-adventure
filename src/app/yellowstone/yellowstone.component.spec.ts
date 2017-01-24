/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { YellowstoneComponent } from './yellowstone.component';

describe('YellowstoneComponent', () => {
  let component: YellowstoneComponent;
  let fixture: ComponentFixture<YellowstoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YellowstoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YellowstoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
