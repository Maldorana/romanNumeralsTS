import { romanNumber } from '../src/romanNumerals';

describe('romanNumerals tests', () => {
  it('should return I when sending 1', () => {
    expect(romanNumber(1)).toBe('I');
  });
  it('should return II when sending 2', () => {
    expect(romanNumber(2)).toBe('II');
  });
});
