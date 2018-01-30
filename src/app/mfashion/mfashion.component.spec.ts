import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MfashionComponent } from './mfashion.component';

describe('MfashionComponent', () => {
  let component: MfashionComponent;
  let fixture: ComponentFixture<MfashionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MfashionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MfashionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
