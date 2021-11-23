export function romanNumber(number: number): string {
  if (number >= 40) return 'XL' + romanNumber(number - 40);
  if (number >= 10) return 'X' + romanNumber(number - 10);
  if (number >= 9) return 'IX';
  if (number >= 5) return 'V' + romanNumber(number - 5);
  if (number >= 4) return 'IV';
  if (number > 0) return 'I' + romanNumber(number - 1);
  return '';
}
