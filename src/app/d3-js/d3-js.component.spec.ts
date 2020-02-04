import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3JsComponent } from './d3-js.component';

describe('D3JsComponent', () => {
  let component: D3JsComponent;
  let fixture: ComponentFixture<D3JsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3JsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3JsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
