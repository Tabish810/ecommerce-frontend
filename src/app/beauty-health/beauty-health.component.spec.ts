import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautyHealthComponent } from './beauty-health.component';

describe('BeautyHealthComponent', () => {
  let component: BeautyHealthComponent;
  let fixture: ComponentFixture<BeautyHealthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeautyHealthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeautyHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
