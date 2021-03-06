import { romanNumber } from '../src/romanNumerals';

describe('romanNumerals tests', () => {
  it('should return I when sending 1', () => {
    expect(romanNumber(1)).toBe('I');
  });
  it('should return II when sending 2', () => {
    expect(romanNumber(2)).toBe('II');
  });
  it('should return III when sending 3', () => {
    expect(romanNumber(3)).toBe('III');
  });
  it('should return V when sending 5', () => {
    expect(romanNumber(5)).toBe('V');
  });
  it('should return XXXVIII when sending 38', () => {
    expect(romanNumber(38)).toBe('XXXVIII');
  });
  it('should return IV when sending 4', () => {
    expect(romanNumber(4)).toBe('IV');
  });
  it('should return IX when sending 9', () => {
    expect(romanNumber(9)).toBe('IX');
  });
  it('should return XLIX when sending 49', () => {
    expect(romanNumber(49)).toBe('XLIX');
  });
  it('should return L when sending 50', () => {
    expect(romanNumber(50)).toBe('L');
  });
  it('should return XCIX when sending 99', () => {
    expect(romanNumber(99)).toBe('XCIX');
  });
  it('should return CVII when sending 107', () => {
    expect(romanNumber(107)).toBe('CVII');
  });
  it('should return CDIV when sending 404', () => {
    expect(romanNumber(404)).toBe('CDIV');
  });
  it('should return DXCII when sending 592', () => {
    expect(romanNumber(592)).toBe('DXCII');
  });
  it('should return CMXXXVI when sending 936', () => {
    expect(romanNumber(936)).toBe('CMXXXVI');
  });
  it('should return MMCMXCIX when sending 2999', () => {
    expect(romanNumber(2999)).toBe('MMCMXCIX');
  });
});
