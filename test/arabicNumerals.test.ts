import { arabicNumber } from '../src/arabicNumerals';

describe('arabicNumerals tests', () => {
  it('should return 1 when entered I', () => {
    expect(arabicNumber('I')).toBe(1);
  });
  it('should return 5 when entered V', () => {
    expect(arabicNumber('V')).toBe(5);
  });
});
