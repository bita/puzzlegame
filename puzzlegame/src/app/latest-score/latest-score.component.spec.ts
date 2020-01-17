import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestScoreComponent } from './latest-score.component';

describe('LatestScoreComponent', () => {
  let component: LatestScoreComponent;
  let fixture: ComponentFixture<LatestScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
