import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFindMonsterComponent } from './page-find-monster.component';

describe('PageFindMonsterComponent', () => {
  let component: PageFindMonsterComponent;
  let fixture: ComponentFixture<PageFindMonsterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageFindMonsterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFindMonsterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
