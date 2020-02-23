import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedSearchPreviewComponent } from './advanced-search-preview.component';

describe('AdvancedSearchPreviewComponent', () => {
  let component: AdvancedSearchPreviewComponent;
  let fixture: ComponentFixture<AdvancedSearchPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedSearchPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedSearchPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
