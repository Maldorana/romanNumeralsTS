const numbers = [
  { arabic: 10, roman: 'X' },
  { arabic: 5, roman: 'V' },
  { arabic: 1, roman: 'I' },
];

export function arabicNumber(number: string): number {
  for (const element of numbers) {
    if (number === element.roman) {
      return element.arabic;
    }
  }
}
