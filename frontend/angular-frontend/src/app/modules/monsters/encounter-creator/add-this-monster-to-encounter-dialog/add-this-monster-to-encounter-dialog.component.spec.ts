import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddThisMonsterToEncounterDialogComponent } from './add-this-monster-to-encounter-dialog.component';

describe('AddThisMonsterToEncounterDialogComponent', () => {
  let component: AddThisMonsterToEncounterDialogComponent;
  let fixture: ComponentFixture<AddThisMonsterToEncounterDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddThisMonsterToEncounterDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddThisMonsterToEncounterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
