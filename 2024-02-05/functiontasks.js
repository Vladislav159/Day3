function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// 1. Parašykite funkciją, kurios argumentas būtų tekstas, kuris yra įterpiamas į h1 elementą ir rezultatas būtų grąžinamas iš jos.

document.write (`<h2>First Task</h2>`);

function showMessage(tekstas) {
    let message = `<h1>${tekstas}</h1>`;
   return message;
}
console.log(showMessage('Kazkokia zinute'));


// 2.Parašykite funkciją su dviem argumentais, pirmas argumentas tekstas, įterpiamas į h HTML elementą, o antrasis elemento numeris (1-6). Rašydami šią funkciją remkitės pirmąjame uždavinyje parašyta funkcija.

document.write (`<h2>Second Task</h2>`);

function secondtask(tekstas , numero) {
     message = `<h1>${tekstas}</h1>` ;
     let number = `${numero = rand(1, 6)}`;
   return message + number;
}
console.log(secondtask(`Hello world`))

let rand_number = rand(1, 6);
let tagas = '<h' + rand_number + '>';
document.write(tagas + rand_number + '</h' + rand_number +'>' );

// 3.Generuokite atsitiktinį stringą, pasinaudodami kodu btoa(Date.now()). Visas didžiąsias raides stringe įdėkite į h1 elementą. Likusių simbolių neimkite. Jeigu iš eilės eina kelios didžiosios raidės, jas į elementą reikia dėti kartu (h1 atsidaro prieš pirmosios ir užsidaro po paskutinės). Keitimui galite panaudoti patobulintą pirmo uždavinio funkciją ir replaceAll() metodą.

document.write (`<h2>Third Task</h2>`);

// 4.Parašykite funkciją, kuri skaičiuotų, iš kiek sveikų skaičių jos argumentas dalijasi be liekanos (išskyrus vienetą ir patį save). Argumentą patikrinkite ar tai sveikas skaičius, priešingu atveju grąžinkite neigiamą atsakymą.

document.write (`<h2>Fourth Task</h2>`);

// 5.Sugeneruokite masyvą iš 100 elementų, kurio reikšmės atsitiktiniai skaičiai nuo 33 iki 77. Rūšiuokite masyvą pagal daliklių be liekanos kiekį mažėjimo tvarka, panaudodami ketvirto uždavinio funkciją.

document.write (`<h2>Fifth Task</h2>`);

// 6.Sugeneruokite masyvą iš 100 elementų, kurio reikšmės atsitiktiniai skaičiai nuo 333 iki 777. Naudodami 4 uždavinio funkciją iš masyvo ištrinkite pirminius skaicius.

document.write (`<h2>Sixth Task</h2>`);

