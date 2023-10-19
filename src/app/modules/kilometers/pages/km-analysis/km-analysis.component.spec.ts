import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KmAnalysisComponent } from './km-analysis.component';

describe('KmAnalysisComponent', () => {
  let component: KmAnalysisComponent;
  let fixture: ComponentFixture<KmAnalysisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KmAnalysisComponent]
    });
    fixture = TestBed.createComponent(KmAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
