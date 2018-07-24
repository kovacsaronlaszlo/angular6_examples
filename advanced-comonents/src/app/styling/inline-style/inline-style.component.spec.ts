import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineStyleComponent } from './inline-style.component';

describe('InlineStyleComponent', () => {
  let component: InlineStyleComponent;
  let fixture: ComponentFixture<InlineStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InlineStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
