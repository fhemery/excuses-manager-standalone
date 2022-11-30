import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcusesCardComponent } from './excuses-card.component';

describe('ExcusesCardComponent', () => {
  let component: ExcusesCardComponent;
  let fixture: ComponentFixture<ExcusesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcusesCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcusesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
