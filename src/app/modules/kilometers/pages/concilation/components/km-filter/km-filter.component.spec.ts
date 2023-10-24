import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KmFilterComponent } from './km-filter.component';

describe('KmFilterComponent', () => {
  let component: KmFilterComponent;
  let fixture: ComponentFixture<KmFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KmFilterComponent]
    });
    fixture = TestBed.createComponent(KmFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
