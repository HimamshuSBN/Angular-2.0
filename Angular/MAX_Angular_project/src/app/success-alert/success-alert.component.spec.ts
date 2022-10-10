import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerAlertComponent } from './success-alert.component';

describe('ServerAlertComponent', () => {
  let component: ServerAlertComponent;
  let fixture: ComponentFixture<ServerAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerAlertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServerAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
