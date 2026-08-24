function combine(a: number, b: number): number {
  return a + b;
}
const result: number = combine(10, 20);
console.log(result);

// Ejemplos básicos
const aceptaNumber = (n: number) => {
  console.log(n);
};

aceptaNumber(10);

const numbersArray: number[] = [2, 4, 6, 8, 10];

const aceptaPares = (numero: number): number => {
  if (numbersArray.includes(numero)) {
    console.log(numero);
  }
  return numero;
};
