import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KmAnalysisUploadComponent } from './km-analysis-upload.component';

describe('KmAnalysisUploadComponent', () => {
  let component: KmAnalysisUploadComponent;
  let fixture: ComponentFixture<KmAnalysisUploadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KmAnalysisUploadComponent]
    });
    fixture = TestBed.createComponent(KmAnalysisUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
