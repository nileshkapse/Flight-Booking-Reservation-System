import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightTicketsComponent } from './flight-tickets.component';

describe('FlightTicketsComponent', () => {
  let component: FlightTicketsComponent;
  let fixture: ComponentFixture<FlightTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightTicketsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
