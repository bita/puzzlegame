import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuzzelesComponent } from './puzzeles.component';

describe('PuzzelesComponent', () => {
  let component: PuzzelesComponent;
  let fixture: ComponentFixture<PuzzelesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuzzelesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuzzelesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
