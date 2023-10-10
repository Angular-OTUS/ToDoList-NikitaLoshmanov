import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ToDoListItemViewComponent} from './to-do-list-item-view.component';

describe('ToDoListItemViewComponent', () => {
  let component: ToDoListItemViewComponent;
  let fixture: ComponentFixture<ToDoListItemViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToDoListItemViewComponent]
    });
    fixture = TestBed.createComponent(ToDoListItemViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
