export function romanNumber(number: number): string {
  if (number > 0) return 'I' + romanNumber(number - 1);
  return '';
}
