import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TandpComponent } from './tandp.component';

describe('TandpComponent', () => {
  let component: TandpComponent;
  let fixture: ComponentFixture<TandpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TandpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TandpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
