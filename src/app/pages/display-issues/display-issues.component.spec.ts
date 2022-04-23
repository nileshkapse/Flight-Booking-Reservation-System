import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayIssuesComponent } from './display-issues.component';

describe('DisplayIssuesComponent', () => {
  let component: DisplayIssuesComponent;
  let fixture: ComponentFixture<DisplayIssuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayIssuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
