import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OopsLib003Component } from './oops-lib003.component';

describe('OopsLib003Component', () => {
  let component: OopsLib003Component;
  let fixture: ComponentFixture<OopsLib003Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OopsLib003Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OopsLib003Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
