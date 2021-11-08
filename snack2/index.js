/**
 * Snack 2
A partire da un array di numeri, genera un secondo array con le potenze al quadrato di ogni numero.
Es: [1, 2, 3, 4, 5] => [1, 4, 9, 16, 25]
 */

const numbers = [1, 2, 3, 4, 5];
console.log('Numeri originali:', numbers);

const squaredNumbers = numbers.map((number) => {
    return number * number;
});

console.log('Numeri al quadrato', squaredNumbers);

console.log('Numeri originali dopo la creazione del secondo array', numbers);