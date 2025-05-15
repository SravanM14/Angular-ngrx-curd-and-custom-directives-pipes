import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectChildComponent } from './change-detect-child.component';

describe('ChangeDetectChildComponent', () => {
  let component: ChangeDetectChildComponent;
  let fixture: ComponentFixture<ChangeDetectChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeDetectChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeDetectChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
