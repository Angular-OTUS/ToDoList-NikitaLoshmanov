import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ToDoListItemEditComponent} from './to-do-list-item-edit.component';

describe('ToDoListItemEditComponent', () => {
  let component: ToDoListItemEditComponent;
  let fixture: ComponentFixture<ToDoListItemEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToDoListItemEditComponent]
    });
    fixture = TestBed.createComponent(ToDoListItemEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
