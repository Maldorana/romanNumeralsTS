export function romanNumber(number: number): string {
  if (number >= 10) return 'X' + romanNumber(number - 10);
  if (number >= 5) return 'V' + romanNumber(number - 5);
  if (number > 0) return 'I' + romanNumber(number - 1);
  return '';
}
