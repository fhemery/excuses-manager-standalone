import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcusesListComponent } from './excuses-list.component';

describe('ExcusesListComponent', () => {
  let component: ExcusesListComponent;
  let fixture: ComponentFixture<ExcusesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcusesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcusesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
