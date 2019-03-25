import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewColumnModalComponent } from './new-column-modal.component';

describe('NewColumnModalComponent', () => {
  let component: NewColumnModalComponent;
  let fixture: ComponentFixture<NewColumnModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewColumnModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewColumnModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
