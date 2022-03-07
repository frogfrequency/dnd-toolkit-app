import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMonsterDialogComponent } from './add-monster-dialog.component';

describe('AddMonsterDialogComponent', () => {
  let component: AddMonsterDialogComponent;
  let fixture: ComponentFixture<AddMonsterDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMonsterDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMonsterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
