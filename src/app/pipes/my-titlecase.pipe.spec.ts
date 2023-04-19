import { MyTitlecasePipe } from './my-titlecase.pipe';

describe('MyTitlecasePipe', () => {
  it('create an instance', () => {
    const pipe = new MyTitlecasePipe();
    expect(pipe).toBeTruthy();
  });
});
