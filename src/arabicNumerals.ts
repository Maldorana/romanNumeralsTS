const numbers: any = { X: 10, V: 5, I: 1 };

export function arabicNumber(romanNumber: string): number {
  let total: number = 0;

  for (const element of romanNumber.split('')) {
    total += numbers[element];
  }
  return total;
}
