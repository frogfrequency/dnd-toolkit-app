import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewEncounterDialogComponent } from './add-new-encounter-dialog.component';

describe('AddNewEncounterDialogComponent', () => {
  let component: AddNewEncounterDialogComponent;
  let fixture: ComponentFixture<AddNewEncounterDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewEncounterDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewEncounterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
