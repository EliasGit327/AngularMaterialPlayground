import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdaptiveTableComponent } from './adaptive-table.component';

describe('AdaptiveTableComponent', () => {
  let component: AdaptiveTableComponent;
  let fixture: ComponentFixture<AdaptiveTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdaptiveTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdaptiveTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
