import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFormWithValidationsExpliciComponent } from './demo-form-with-validations-explici.component';

describe('DemoFormWithValidationsExpliciComponent', () => {
  let component: DemoFormWithValidationsExpliciComponent;
  let fixture: ComponentFixture<DemoFormWithValidationsExpliciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoFormWithValidationsExpliciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFormWithValidationsExpliciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
