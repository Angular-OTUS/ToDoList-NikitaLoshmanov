import {FilterByTaskStatusPipe} from './filter-tasks.pipe';

describe('FilterItemsPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterByTaskStatusPipe();
    expect(pipe).toBeTruthy();
  });
});
