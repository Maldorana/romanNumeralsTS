import { arabicNumber } from '../src/arabicNumerals';

describe('arabicNumerals tests', () => {
  describe('with 1 symbol', () => {
    it('should return 1 when entered I', () => {
      expect(arabicNumber('I')).toBe(1);
    });
    it('should return 5 when entered V', () => {
      expect(arabicNumber('V')).toBe(5);
    });
    it('should return 10 when entered X', () => {
      expect(arabicNumber('X')).toBe(10);
    });
  });

  describe('with 2 or more symbols', () => {
    it('should return 2 when entered II', () => {
      expect(arabicNumber('II')).toBe(2);
    });
    it('should return 3 when entered III', () => {
      expect(arabicNumber('III')).toBe(3);
    });
    it('should return 4 when entered IV', () => {
      expect(arabicNumber('IV')).toBe(4);
    });
  });
});
