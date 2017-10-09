import add from '@/utils/add';

describe('function add', () => {
  it('should add two numbers into a result', () => {
    expect(add(1, 2)).to.equal(3);
  });
});
