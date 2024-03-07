function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29), kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25.
document.write('<h2>First task</h2>')
const newArray = [];

for(let i = 0; i < 30; i++) {
    let numbers = rand(5, 25);
    newArray.push(numbers);
}
console.log(newArray);
//2. Naudodamiesi 1 uždavinio masyvu:
//a. Suskaičiuokite kiek masyve yra reikšmių didesnių už 10;
document.write('<h2>Second A task</h2>')
let valueOver10 = 0;


for(let i  = 0; i < newArray.length; i++) {
    if(newArray[i] > 10)
    valueOver10++;
}
console.log(valueOver10);

const array1  = newArray.filter((reiksme) => 10);
console.log(array1.length);

// b. Raskite didžiausią masyvo reikšmę ir jos indeksą arba indeksus jeigu yra keli;
document.write('<h2>Second B task</h2>');

let max = 0;
let maxindex = [];
for( let i = 0; i < newArray.length; i++) {
    // Reiksme = masyvas[i]
    // Indeksas = i
    // Masyvo ilgis = masyvas.length
    // console.log(array[i]);
    if(max < newArray[i]) {
        max = newArray[i];   
    }  
    
}
for( i = 0; i < newArray.length; i++) {
    if(max === newArray[i])
        maxindex.push(i); 
}
console.log(`Max Value:${max}`);
console.log(`Max Index:${maxindex}`);


document.write(`<br></br>`);

// c.Suskaičiuokite visų porinių (lyginių) indeksų reikšmių sumą;
document.write('<h2>Second C task</h2>');

let summa = 0;

for(let i = 0; i < newArray.length; i++) {
    if(newArray[i] % 2 === 0) {
        summa += newArray[i];
    }
}
console.log(`Suma : ${summa}`);
// d. Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo reikšmes minus tos reikšmės indeksas;

document.write('<h2>Second D task</h2>');

 const newMassive = [];

    for (i = 0; i < newArray.length; i++) {
      newMassive.push(newArray[i] - i);
    }

    console.log(newMassive);

//  array2= newArray.map((value, index) => value - index);

//      console.log(array2);


document.write(`<br></br>`);

// e.Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25, kad bendras masyvas padidėtų iki indekso 39;
document.write('<h2>Second E task</h2>');
for(i = 0; i < 10; i++) {
    const digits = rand(5, 25);
    newArray.push(digits);
}
console.log(newArray);

document.write(`<br></br>`);
// f)Iš masyvo elementų sukurkite du naujus masyvus. Vienas turi būti sudarytas iš neporinių indeksų reikšmių, o kitas iš porinių;
document.write('<h2>Second F task</h2>');
    const lyginiai = [];
    const nelyginiai = [];

    for (let i = 0; i < newArray.length; i++) {
        if( i % 2 === 0 ){
            console.log(`Lyginiai: ${i}`);
            lyginiai.push(newArray[i]);
        } else {
            console.log(`Nelyginiai ${i} `);
            nelyginiai.push(newArray[i]);
        }
    }
    

document.write(`<br></br>`);
// g) Pirminio masyvo elementus su poriniais indeksais padarykite lygius 0 jeigu jie didesni už 15;
document.write('<h2>Second G task</h2>');

for (let i = 0; i < newArray.length; i++) {
   
         if(newArray[i] > 15 && i % 2 === 0)
            newArray[i] = 0;
        
        
 }
 console.log(`Pakeitimai ${newArray}`);

 
 const naujasArray = newArray.map((value, index) => index % 2 === 0 && value > 15 ? value = 0 : value) ;

console.log(naujasArray);

document.write(`<br></br>`);

// h) Suraskite pirmą indeksą, kurio elemento reikšmė didesnė už 10;

let firstIndexas = 0;

for(let i = 0; i < newArray.length; i++) {

   if(newArray[i] > 10) {
    firstIndexas = i;
    break;
   }
}

console.log(firstIndexas);

const indexArray = newArray.findIndex((index) => index > 10 );

console.log(indexArray);

// I)Iš masyvo ištrinkite visus elementus turinčius porinį indeksą;

const newL = [];

for( i  = 0;i < newArray.length ; i ++) {
    if(i % 2 === 0){
        newL.push(newArray[i]);
    }
    
}
console.log(newL);

const indexI= newL.filter((value,index) => index % 2 === 0  );

console.log(newL);

// 3.Sugeneruokite du masyvus, kurių reikšmės yra atsitiktiniai skaičiai nuo 100 iki 999. Masyvų ilgiai 100. Masyvų reikšmės turi būti unikalios savo masyve (t.y. neturi kartotis).


// 4 Sugeneruokite masyvą, kuris būtų sudarytas iš reikšmių, kurios yra pirmame 3 uždavinio masyve, bet nėra antrame 3 uždavinio masyve.

// 5.Sugeneruokite masyvą iš elementų, kurie kartojasi abiejuose 3 uždavinio masyvuose.

// 6.Sugeneruokite 10 skaičių masyvą pagal taisyklę: Du pirmi skaičiai- atsitiktiniai nuo 5 iki 25. Trečias, pirmo ir antro suma. Ketvirtas- antro ir trečio suma. Penktas trečio ir ketvirto suma ir t.t.
// [10, 15, 25, 40, 65…]

// 7.Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200. Suskaičiuokite kiek yra kiekvienos raidės.

// 8.Išrūšiuokite 7 uždavinio masyvą pagal abecėlę.

// 9.Sugeneruokite 3 masyvus pagal 7 uždavinio sąlygą. Sudėkite masyvus, sudėdami reikšmes pagal atitinkamus indeksus. Paskaičiuokite kiek unikalių (po vieną, nesikartojančių) reikšmių ir kiek unikalių kombinacijų gavote.
// Pvz.
// [‘AAA’, ‘BBB’, ‘CCC’, ‘ACC’] = Viena unikali reikšmė “ACC”
// [‘ACA’, ‘ABA’, ‘ACA’, ‘ADA’] = Dvi unikalios kombinacijos “ABA” ir “ADA”
// [‘A’, ‘D’, ‘B’]
// [‘B’, ‘A’, ‘D’]
// [‘A’, ‘C’, ‘B’]

// ‘ABA’
// ‘DAC’
// ‘BDB’

// 10. Sugeneruokite 101 elemento masyvą su atsitiktiniais skaičiais nuo 0 iki 300. Reikšmes kurios tame masyve yra ne unikalios pergeneruokite iš naujo taip, kad visos reikšmės masyve būtų unikalios. Išrūšiuokite masyvą taip, kad jo didžiausia reikšmė būtų masyvo viduryje, o einant nuo jos link masyvo pradžios ir pabaigos reikšmės mažėtų. Paskaičiuokite pirmos ir antros masyvo dalies sumas (neskaičiuojant vidurinės). Jeigu sumų skirtumas (modulis, absoliutus dydis) yra didesnis nei | 30 | rūšiavimą kartokite. (Kad sumos nesiskirtų viena nuo kitos daugiau nei per 30)