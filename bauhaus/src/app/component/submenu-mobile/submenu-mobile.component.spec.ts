import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmenuMobileComponent } from './submenu-mobile.component';

describe('SubmenuMobileComponent', () => {
  let component: SubmenuMobileComponent;
  let fixture: ComponentFixture<SubmenuMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmenuMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmenuMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
