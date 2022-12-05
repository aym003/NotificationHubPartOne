import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationPopupComponent } from './notification-popup.component';

describe('NotificationPopupComponent', () => {
  let component: NotificationPopupComponent;
  let fixture: ComponentFixture<NotificationPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
