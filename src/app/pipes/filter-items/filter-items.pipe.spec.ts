import {FilterByItemStatusPipe} from './filter-items.pipe';

describe('FilterItemsPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterByItemStatusPipe();
    expect(pipe).toBeTruthy();
  });
});
