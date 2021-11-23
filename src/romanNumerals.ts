const numbers = [
  { arabic: 40, roman: 'XL' },
  { arabic: 10, roman: 'X' },
  { arabic: 9, roman: 'IX' },
  { arabic: 5, roman: 'V' },
  { arabic: 4, roman: 'IV' },
  { arabic: 1, roman: 'I' },
];

export function romanNumber(number: number): string {
  for (const element of numbers) {
    if (number >= element.arabic)
      return element.roman + romanNumber(number - element.arabic);
  }
  return '';
}
