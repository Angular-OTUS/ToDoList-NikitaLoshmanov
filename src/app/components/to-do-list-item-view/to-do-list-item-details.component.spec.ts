import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ToDoListItemDetailsComponent} from './to-do-list-item-details.component';

describe('ToDoListItemViewComponent', () => {
  let component: ToDoListItemDetailsComponent;
  let fixture: ComponentFixture<ToDoListItemDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToDoListItemDetailsComponent]
    });
    fixture = TestBed.createComponent(ToDoListItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
