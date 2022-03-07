import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterListViewComponent } from './monster-list-view.component';

describe('MonsterListViewComponent', () => {
  let component: MonsterListViewComponent;
  let fixture: ComponentFixture<MonsterListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonsterListViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonsterListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
