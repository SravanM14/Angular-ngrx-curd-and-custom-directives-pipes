import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectParentComponent } from './change-detect-parent.component';

describe('ChangeDetectParentComponent', () => {
  let component: ChangeDetectParentComponent;
  let fixture: ComponentFixture<ChangeDetectParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeDetectParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeDetectParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
