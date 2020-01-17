import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestScoreComponent } from './best-score.component';

describe('BestScoreComponent', () => {
  let component: BestScoreComponent;
  let fixture: ComponentFixture<BestScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
