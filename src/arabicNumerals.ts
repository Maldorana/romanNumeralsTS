const numbers: any = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

export function arabicNumber(romanNumber: string): number {
  let total: number = 0;

  for (let romanIndex = 0; romanIndex < romanNumber.length; romanIndex++) {
    if (
      numbers[romanNumber[romanIndex]] < numbers[romanNumber[romanIndex + 1]]
    ) {
      total += numbers[romanNumber[romanIndex] + romanNumber[romanIndex + 1]];
      romanIndex++;
    } else {
      total += numbers[romanNumber[romanIndex]];
    }
  }
  return total;
}
