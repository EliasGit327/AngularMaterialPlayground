import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversalInputsComponent } from './universal-inputs.component';

describe('UniversalInputsComponent', () => {
  let component: UniversalInputsComponent;
  let fixture: ComponentFixture<UniversalInputsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversalInputsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversalInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
