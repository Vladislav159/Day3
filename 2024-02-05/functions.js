function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Klasikinis funkcios aprašymas
// function suma(a, b) {
//     // Funkcija į save priima PARAMETRUS (parameters) a ir b
//     console.log(a + b);
// }

// Iššaukiant funkciją perduodami ARGUMENTAI (Arguments)
// suma(10, 30);
// suma(5, 20);
// suma(18, 16);
// suma(11, 10);

console.log('----Pirmas Pavyzdys----');

function suma(a, b) {
    return a + b;
}

let padauginta = suma(9, 11) * 2;
let padalinta = suma(9, 11) / 2;

console.log(padauginta);
console.log(padalinta);

console.log('----Antras Pavyzdys (Pozicionavimas)----');

console.log(atimtis(50, 20));

// Named function - pozicionavimas skripta neturi įtakos, kuomet naudojamas function raktažodis
function atimtis(a, b) {
    return a - b;
}

// Neįvardinta funkcija (Anonymous function)
console.log('----Trečias Pavyzdys----');

const stringoGrazinimas = function () {
    return 'Funkcija grąžino stringą';
}

// Iššaukiant funkciją būtina nurodyti skliaustelius šalia pavadinimo
console.log(stringoGrazinimas);


// Funkcijos pritaikymas su Monetos užduotimi

const monetosMetimas = function (scenarijus) {
    //scenarijus = 0, 1, 2
    let kiekKartu = 0;
    let riba = scenarijus === 0 ? 1 : 3;

    while(true) {
        let moneta = rand(0, 1);

        if(moneta === 0) {
            //Herbas
            document.write('H');
            kiekKartu++;
        } else {
            //Skaičius
            document.write('S');
            if(scenarijus === 2)
                kiekKartu = 0;
        }

        if(kiekKartu >= riba)
            break;
    } 
}

document.write('<h3>Pirmas scenarijus:</h3>');
monetosMetimas(0);
document.write('<h3>Antras scenarijus:</h3>');
monetosMetimas(1);
document.write('<h3>Trečias scenarijus:</h3>');
monetosMetimas(2);

// KISS - Keep it simple stupid
// DRY - Don't repeat yourself

console.log('----Ketvirtas Pavyzdys----');

function kintamojoTikrinimas(skaicius) {
    // Funkcija rezultatą grąžina tik vieną kartą
    // Dėl to aktyvavus return komanda viso kito kodo skaitymas yra nutraukiamas 


    // if(typeof skaicius === 'number') {
    //     return skaicius.toFixed(2);
    // } else {
    //     return 'Perduotas argumentas nėra skaičius';
    // }  
    
    if(typeof skaicius === 'number') 
        return skaicius.toFixed(2);
    
    return 'Perduotas argumentas nėra skaičius';
}

console.log(kintamojoTikrinimas(10.21651651));

// const masyvas = [];

// masyvas.push('Pirma reikšmė', 0, 15, 15, 20, 156);
// console.log(masyvas);

// Jeigu norime funkcijos kuri galėtų priimti nelimituotą kiekį parametrų
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

console.log('----Penktas Pavyzdys----');

function push(...parametras) {
    // Priimamas masyvas
    console.log(parametras);
}

// Reikšmių konvertavimas funkcijoje Į masyvą

push(10, 20, 30, 40, 50); //Neribotas kiekis argumentų

console.log('----Šeštas Pavyzdys----');

const masyvas = [10, 20, 30, 40, 50];

// Reikšmių konvertavimas IŠ masyvo

push(...masyvas);

console.log('----Septintas Pavyzdys----');

// Sujungiant du masyvus į vieną
// Alternatyva: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
const antrasMasyvas = [89, 14, 22, 7, 1, 0]; 

masyvas.push(...antrasMasyvas);

console.log(masyvas);

// Funkcijos duomens tipas yra function
console.log(typeof function () {});

// Pagal nutylėjimą (default) 
// Jeigu reikšmė neperduota argumente, tuomet parametras įgauna reikšmę pagal nutylėjimą
function defaultParams(pirmas = 12, antras = 12) {
    return pirmas * antras;
}

console.log(defaultParams(25));

// Reikšmės patikrinimas
function skaiciausTikrinimas(skaicius) {
    if(!skaicius)
        return; //Jeigu nieko nenurodome prie return komandos grąžinama undefined

    return skaicius.toFixed(2);
}

console.log(skaiciausTikrinimas());