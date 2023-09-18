import {TestBed} from '@angular/core/testing';

import {ToDoListDataService} from './to-do-list-data.service';

describe('ToDoListDataService', () => {
  let service: ToDoListDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToDoListDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
