import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEncounterPopupComponent } from './add-encounter-popup.component';

describe('AddEncounterPopupComponent', () => {
  let component: AddEncounterPopupComponent;
  let fixture: ComponentFixture<AddEncounterPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEncounterPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEncounterPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
