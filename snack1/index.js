/**
 * Snack 1
1. Creare un oggetto che rappresenti un giocatore di basket, con le seguenti proprietà:
- Codice giocatore
- Nome
- Cognome
- Età
- Media punti fatti per partita
- Percentuale di successo per tiri da 3 punti
2. Generare tramite delle funzioni le statistiche di gioco, secondo queste regole:
- il codice giocatore deve essere formato da 3 lettere maiuscole casuali e 3 cifre casuali
- la media punti fatti per partita deve essere compresa tra 0 e 50
- la percentuale di successo per tiri da 3 punti deve essere compresa tra 0 e 100
3. Stampare Nome, cognome, età e codice giocatore.
4. Creare un array di 10 giocatori di basket, con le regole sopra indicate
5. Creare un nuovo array con i giocatori che hanno una media di punti superiore a 35 e la percentuale di successo per i tiri da 3 punti superiore all’80%.
 */

const basketPlayers = [
    {
        playerCode: `${generateRandomLetter(3) + getRandomNumber(0, 9, 3)}`,
        name: 'LeBron',
        surname: 'James',
        age: '36',
        averagePoints: `${getRandomNumber(0, 50, 1)}`,
        averageThreePointers: `${getRandomNumber(0, 100, 1)}`,
    },
    {
        playerCode: `${generateRandomLetter(3) + getRandomNumber(0, 9, 3)}`,
        name: 'Kevin',
        surname: 'Durant',
        age: '28',
        averagePoints: `${getRandomNumber(0, 50, 1)}`,
        averageThreePointers: `${getRandomNumber(0, 100, 1)}`,
    },
    {
        playerCode: `${generateRandomLetter(3) + getRandomNumber(0, 9, 3)}`,
        name: 'Giannis',
        surname: 'Antetokounmpo',
        age: '37',
        averagePoints: `${getRandomNumber(0, 50, 1)}`,
        averageThreePointers: `${getRandomNumber(0, 100, 1)}`,
    },
    {
        playerCode: `${generateRandomLetter(3) + getRandomNumber(0, 9, 3)}`,
        name: 'Stephen',
        surname: 'Curry',
        age: '24',
        averagePoints: `${getRandomNumber(0, 50, 1)}`,
        averageThreePointers: `${getRandomNumber(0, 100, 1)}`,
    },
    {
        playerCode: `${generateRandomLetter(3) + getRandomNumber(0, 9, 3)}`,
        name: 'James',
        surname: 'Harden',
        age: '29',
        averagePoints: `${getRandomNumber(0, 50, 1)}`,
        averageThreePointers: `${getRandomNumber(0, 100, 1)}`,
    },
    {
        playerCode: `${generateRandomLetter(3) + getRandomNumber(0, 9, 3)}`,
        name: 'Kawhi',
        surname: 'Leonard',
        age: '36',
        averagePoints: `${getRandomNumber(0, 50, 1)}`,
        averageThreePointers: `${getRandomNumber(0, 100, 1)}`,
    },
    {
        playerCode: `${generateRandomLetter(3) + getRandomNumber(0, 9, 3)}`,
        name: 'Nikola',
        surname: 'Jokic',
        age: '33',
        averagePoints: `${getRandomNumber(0, 50, 1)}`,
        averageThreePointers: `${getRandomNumber(0, 100, 1)}`,
    },
    {
        playerCode: `${generateRandomLetter(3) + getRandomNumber(0, 9, 3)}`,
        name: 'Joel',
        surname: 'Embiid',
        age: '32',
        averagePoints: `${getRandomNumber(0, 50, 1)}`,
        averageThreePointers: `${getRandomNumber(0, 100, 1)}`,
    },
    {
        playerCode: `${generateRandomLetter(3) + getRandomNumber(0, 9, 3)}`,
        name: 'Luca',
        surname: 'Doncic',
        age: '22',
        averagePoints: `${getRandomNumber(0, 50, 1)}`,
        averageThreePointers: `${getRandomNumber(0, 100, 1)}`,
    },
    {
        playerCode: `${generateRandomLetter(3) + getRandomNumber(0, 9, 3)}`,
        name: 'Anthony',
        surname: 'Davis',
        age: '31',
        averagePoints: `${getRandomNumber(0, 50, 1)}`,
        averageThreePointers: `${getRandomNumber(0, 100, 1)}`,
    },
];

const filteredPlayers = [];

console.table(basketPlayers);

const {name, surname, age, playerCode} = basketPlayers[0];
console.log('Nome:', name, 'Cognome:', surname, 'Età:', age, 'Codice giocatore:', playerCode);

for (let i = 0; i < basketPlayers.length; i++) {

    if ((basketPlayers[i].averagePoints > 35) && (basketPlayers[i].averageThreePointers >= 80)) {
        filteredPlayers.push(basketPlayers[i]);
    }
}

console.log(filteredPlayers);
console.table(filteredPlayers);

/**
 * Generate random letters
 */

function generateRandomLetter(length) {

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let result = '';

    for (let i = 0; i < length; i++) {

        result += alphabet.charAt(Math.floor(Math.random() * alphabet.length));

    }

    return result;

};

/**
 * Generate random numbers
 */

function getRandomNumber(min, max, length) {

    let numbers = '';

    for (let i = 0; i < length; i++) {

        numbers += (Math.floor(Math.random() * max) + min);

    }

    return numbers;
};