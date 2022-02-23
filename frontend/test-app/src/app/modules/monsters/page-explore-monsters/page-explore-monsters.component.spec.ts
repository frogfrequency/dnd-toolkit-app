import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageExploreMonstersComponent } from './page-explore-monsters.component';

describe('PageExploreMonstersComponent', () => {
  let component: PageExploreMonstersComponent;
  let fixture: ComponentFixture<PageExploreMonstersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageExploreMonstersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageExploreMonstersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
