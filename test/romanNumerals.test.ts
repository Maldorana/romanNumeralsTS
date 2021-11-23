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
});
