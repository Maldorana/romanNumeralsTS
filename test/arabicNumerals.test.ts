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
    it('should return 49 when entered XLIX', () => {
      expect(arabicNumber('XLIX')).toBe(49);
    });
    it('should return 50 when entered L', () => {
      expect(arabicNumber('L')).toBe(50);
    });
    it('should return 99 when entered XCIX', () => {
      expect(arabicNumber('XCIX')).toBe(99);
    });
    it('should return 107 when entered CVII', () => {
      expect(arabicNumber('CVII')).toBe(107);
    });
    it('should return 404 when entered CDIV', () => {
      expect(arabicNumber('CDIV')).toBe(404);
    });
    it('should return 592 when entered DXCII', () => {
      expect(arabicNumber('DXCII')).toBe(592);
    });
    it('should return 936 when entered CMXXXVI', () => {
      expect(arabicNumber('CMXXXVI')).toBe(936);
    });
    it('should return 2999 when entered MMCMXCIX', () => {
      expect(arabicNumber('MMCMXCIX')).toBe(2999);
    });
  });
});
