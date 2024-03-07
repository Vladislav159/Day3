function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}


// 1.Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus (Jonas Jonaitis). Atspausdinti trumpesnį stringą.
// Pvz:
// Johnny Depp
// Rezultatas: Depp

document.write (`<h1>Pirma uzduotys</h1>`);

let actor = 'Johnny';
let last_name = 'Depp';
console.log(actor.length);
console.log(last_name.length);

if (actor.length <= last_name.length) {
        document.write (`${actor}`);
}
else  { 
    document.write ( `${last_name}`);
}


// 2.Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. Vardą atspausdinti tik didžiosiom raidėm, o pavardę tik mažosioms.
// Rezultatas: JOHNNY depp
document.write('<h2>Antra uzduotys</h2>');

let first_Name = `Jack`;
let last_Name = `Black`;

document.write(first_Name.toUpperCase());
document.write(last_Name.toLowerCase());


// 3.Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš pirmų vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.
// Rezultatas: JD
document.write('<h2>Trecia uzduotys</h2>');

let new_actor = 'Johnny';
let new_name = 'Depp';

document.write(new_actor[0], new_name[0]);


// 4.Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš trijų paskutinių vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.
// Rezultatas: NNYEPP
document.write(`<h2>Ketvirta uzduotys </h2>`);

let sexy = `Adrianno`;
let macho = `Celentano`;

// let initials = sexy[sexy.length - 3] + sexy[sexy.length - 2] + sexy[sexy.length - 1];
// initials.toLocaleLowerCase();

document.write( sexy[sexy.length - 3], sexy[sexy.length - 2], sexy[sexy.length - 1]);
document.write( macho[macho.length - 3], macho[macho.length - 2], macho[macho.length - 1]);


// 5.Sukurti kintamąjį su stringu: “An American in Paris”. Jame visas “a” (didžiąsias ir mažąsias) pakeisti žvaigždutėm “*”.  Rezultatą atspausdinti.
// Rezultatas: *n *meric*n in P*ris
document.write(`<h2>Penkta uzduotys </h2>`);

let phrase = `An American in Paris`;

 phrase = phrase.replaceAll ('A', '*');
 phrase = phrase.replaceAll ('a', '*');

document.write(phrase);


// 6.Sukurti kintamąjį su stringu: “An American in Paris”. Suskaičiuoti visas “a” (didžiąsias ir mažąsias) raides. 
// Rezultatas: 4
document.write(`<h2>Sesta uzduotys </h2>`);

let words = `An American in Paris`;

short_word = words.replaceAll('a', "").replaceAll ( "A", "");

console.log ( words.replaceAll('a', "").replaceAll ('A', ""));

console.log(words.length - short_word.length);
console.log(`result: ${words.length - short_word.length}`);
document.write(`${words.length} - ${short_word.length}`);



// 7.Sukurti kintamąjį su stringu: “An American in Paris”. Jame ištrinti visas balses. Rezultatą atspausdinti. Kodą pakartoti su stringais: “Breakfast at Tiffany's”, “2001: A Space Odyssey” ir “It's a Wonderful Life”.
// Rezultatas: n mrcn n Prs
document.write(`<h2>Septynta uzduotys </h2>`);

let parag = `An American in Paris`;
let  breakfast = `Breakfast at Tiffany's`;
let movie = `It's a Wonderful Life`;

 parag = parag.replaceAll ('A', '');
 parag = parag.replaceAll ('a', '');
 parag = parag.replaceAll ('e', '');
 parag = parag.replaceAll ('i', '');
 breakfast = breakfast.replaceAll ('A', '');
 breakfast = breakfast.replaceAll ('a', '');
 breakfast = breakfast.replaceAll ('e', '');
 breakfast = breakfast.replaceAll ('i', '');
 movie = movie.replaceAll ('A', '');
 movie = movie.replaceAll ('a', '');
 movie = movie.replaceAll ('e', '');
 movie = movie.replaceAll ('i', '');
 movie = movie.replaceAll ('o', '');


document.write(parag);
document.write(breakfast);
document.write(movie);

// 8.Stringe, kurį generuoja toks kodas: `Star Wars: Episode ${rand(0,5)} ${rand(1,9)} - A New Hope`; Surasti ir atspausdinti epizodo numerį.  
// let stringas = 'abcd'
// stringas[rand(0, 3)];
// Rezultatas: 5 9

document.write(`<h2>Astunta uzduotys </h2>`);

let episode = `Star Wars: Episode ${rand(0,5)} ${rand(1,9)} - A New Hope`;

console.log(`Star Wars: Episode ${rand(0,5)} ${rand(1,9)} - A New Hope`);

document.write(`Rezultatas: ${episode.at(19)} ${episode.at(21)}`);


// 9.Parašyti kodą, kuris generuotų atsitiktinį stringą iš lotyniškų mažųjų raidžių. Stringo ilgis 3 simboliai.
// Rezultatas: jkr
document.write(`<h2>Devynta uzduotys </h2>`);

let lastwords = `nfoqneofogwngonwogneowngo`;
console.log(lastwords.length);
document.write (lastwords[rand(0,25)], lastwords[rand(0,25)], lastwords[rand(0,25)]);

