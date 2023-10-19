import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KmTableComponent } from './km-table.component';

describe('KmTableComponent', () => {
  let component: KmTableComponent;
  let fixture: ComponentFixture<KmTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KmTableComponent]
    });
    fixture = TestBed.createComponent(KmTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
