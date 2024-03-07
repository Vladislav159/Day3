function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//Reference - Nuoroda iki reikšmės
let pavadinimas = 'UAB "Gera Įmonė"';
                // 0123456...
//Array - masyvas
let masyvas = ['Pavadinimas', 15, false, null, undefined, 'Brandas'];
//             0              1   2      3     4           5            

// Norint pasiimti reikšmę iš masyvo
console.log(masyvas[1]);

// Bendro masyvo atvaizdavimas
console.log(masyvas);

// Norint patikrinti masyvo ilgį
console.log(masyvas.length);

// Masyvo duomenų tipas yra object
console.log(typeof masyvas);

// Norint pridėti į masyvą reikšmę
masyvas[6] = 'Naujai pridėta reikšmė';

masyvas[masyvas.length] = 'Dar vienas pridėtas elementas';

console.log(masyvas);

let skaicius = 10;

skaicius = 10;

// Konstanta negali turėti naujo reikšmės priskyrimo, tačiau masyve esančios reikšmės keistis gali
const naujasMasyvas = [10, 15, 25];

// Reikšmės į masyvo PABAIGĄ
naujasMasyvas[naujasMasyvas.length] = 35;

console.log(naujasMasyvas);

// Reikšmės šalinimas iš masyvo
// BLOGA praktika dirbant su masyvu:
// delete naujasMasyvas[2];

// trynimas splice metodo pagalba:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

// Pirmas parametras nurodo poziciją nuo kurios trinami elementai
// Antras parametras nurodo trinamų elementų kiekį
naujasMasyvas.splice(2, 1);

console.log(naujasMasyvas);

// Reikšmės pakeitimas naudojant splice metodą
naujasMasyvas.splice(2, 1, 'Pakeista reikšmė');

console.log(naujasMasyvas);

// Reikšmių pridėjimas į masyvo PABAIGĄ naudojant push metodą:!!!!!!!!!!!!!!!!!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

naujasMasyvas.push('Reikšmė', 'patalpinta', 'naudojant', 'push', 'metodą');

document.write(`<p>${naujasMasyvas}</p>`);

// Patalpinimas į masyvo PRIEKĮ
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift

naujasMasyvas.unshift('Reikšmė patalpinta masyvo priekyje');

console.log(naujasMasyvas);

document.write(`<p>${naujasMasyvas}</p>`);

// Vakarykštės užduoties sprendimas su ciklais

const string = '54 77 2 59 17 19 108';
const numbers = string.split(' ');
// Masyvo sukūrimas
const filteredNumbers = [];

for(let i = 0; i < numbers.length; i++) {
    const digit = numbers[i];
    let isPrime = true;
    for(let x = 2; x < digit; x++) {
        if(digit % x === 0) {
            isPrime = false;
        }
    }

    if(isPrime) {
        filteredNumbers.push(digit);
    }
}

// Masyvo sujungimas į stringą:!!!!!!!!!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

console.log(filteredNumbers.join(' - '));

// Masyvo sukūrimas
// Pirmas variantas:
// const darVienasMasyvas = [];
const darVienasMasyvas = new Array('Pirmoji reikšmė', 'antroji', 'ir t.t.');

console.log(darVienasMasyvas);

// 1. Testinė užduotis
// Sukurkite 250-ies elementų masyvą (array). Reikšmės atsitiktiniai skaičiai nuo 20 iki 8000.
const testinisMasyvas = [];

for(let i = 0; i < 250; i++) {
    const skaicius = rand(20, 8000);

    testinisMasyvas.push(skaicius);
    // Identiškas veiksmas
    // testinisMasyvas[testinisMasyvas.length] = skaicius;
}

// 2. Užduotis
// Patikrinkite masyvą ir išvalykite visus skaičius kurie yra didesni nei 7000
console.log(testinisMasyvas);

const rezultatoMasyvas = [];

for(let i = 0; i < testinisMasyvas.length; i++) {
    if(testinisMasyvas[i] <= 7000) {
        rezultatoMasyvas.push(testinisMasyvas[i]);
    }
}

console.log(rezultatoMasyvas);