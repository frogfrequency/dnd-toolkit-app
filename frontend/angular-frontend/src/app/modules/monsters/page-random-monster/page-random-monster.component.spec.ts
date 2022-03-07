import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRandomMonsterComponent } from './page-random-monster.component';

describe('PageRandomMonsterComponent', () => {
  let component: PageRandomMonsterComponent;
  let fixture: ComponentFixture<PageRandomMonsterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageRandomMonsterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageRandomMonsterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
