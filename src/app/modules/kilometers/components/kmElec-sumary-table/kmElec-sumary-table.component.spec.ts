import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KmSumaryTableComponent } from './kmElec-sumary-table.component';

describe('KmSumaryTableComponent', () => {
  let component: KmSumaryTableComponent;
  let fixture: ComponentFixture<KmSumaryTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KmSumaryTableComponent]
    });
    fixture = TestBed.createComponent(KmSumaryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
