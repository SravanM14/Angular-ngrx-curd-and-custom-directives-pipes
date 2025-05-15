import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuInnerComponent } from './menu-inner.component';

describe('MenuInnerComponent', () => {
  let component: MenuInnerComponent;
  let fixture: ComponentFixture<MenuInnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuInnerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
