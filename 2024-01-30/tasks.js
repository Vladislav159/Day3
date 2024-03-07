function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// 1. Naršyklėje nupieškite linija iš 400 “*”. 
// Naudodami css stilių “suskaldykite” liniją taip, kad visos žvaigždutės matytusi ekrane;
// Programiškai “suskaldykite” žvaigždutes taip, kad vienoje eilutėje nebūtų daugiau nei 50 “*”; 
document.write(`<h2>First task</h2>`);

let rezultatas = '';

for (let i = 1; i <= 400; i++) {
    rezultatas += '*';

    if (i % 50 === 0) {
        rezultatas += '<br />';
    }
}

document.write(rezultatas);

// 2. Sugeneruokite 300 atsitiktinių skaičių nuo 0 iki 300, atspausdinkite juos atskirtus tarpais ir suskaičiuokite kiek tarp jų yra didesnių už 150.Skaičiai didesni nei 275 turi būti raudonos spalvos.
document.write(`<h2>Second task</h2>`);

let i = 0;
let numero = 0;

while (i < 300) {
    let numero = rand(0, 300);

    if (numero > 150);
    numero++;
    if (numero > 275) {
        document.write(`<span style ="color:red;"> ${numero}</span>`);
    } else {
        document.write(` ${numero}`);
    }
    i++;

}

// 3.Vienoje eilutėje atspausdinkite visus skaičius nuo 1 iki 3000, kurie dalijasi iš 77 be liekanos. Skaičius atskirkite kableliais. Po paskutinio skaičiaus kablelio neturi būti. Jeigu reikia, panaudokite css, kad visi rezultatai matytusi ekrane.
document.write(`<h2>Third task</h2>`);

for (let i = 1; i < 3000; i++) {
    if (i % 77 === 0) {
        document.write(`<span> ${i}</span>`);
        if (i !== 2926) {
            document.write(`,`);
        }
    }
}

// 4. Nupieškite kvadratą iš “*”, kurio kraštinės sudaro 100 “*”. Panaudokite css stilių, kad kvadratas ekrane atrodytų kvadratinis. (Priskirkite reikiamą eilučių aukštį)
// * * * * * * * * * * *
// * * * * * * * * * * *
// * * * * * * * * * * *
// * * * * * * * * * * *
// * * * * * * * * * * *
// * * * * * * * * * * *
// * * * * * * * * * * *
document.write(`<h2>Fourth task</h2>`);

let results = '';


for (let numb = 1; numb < 25 * 25; numb++) {
    results += '*';

    if (numb % 26 === 0) {
        results += '<br />';
    }
}

document.write(results);

// 5. Prieš tai nupieštam kvadratui nupieškite raudonas istrižaines.
document.write(`<h2>Fifth task</h2>`);

let size = 25;
let ressults = '';


for (let y = 0; y < size; y++) {

    for (let x = 0; x < size; x++) {
        if (x === y || x === size - y - 1) {
            ressults += '<span style = "color:red;">*</span>';
        } else {
            ressults += '*';
        }
    }
    ressults += '</br>';

}

document.write(ressults);

// 6.Metam monetą. Monetos kritimo rezultatą imituojam rand() funkcija, kur 0 yra herbas, o 1 - skaičius. Monetos metimo rezultatus išvedame į ekraną atskiroje eilutėje: 1“S” jeigu iškrito skaičius ir 0“H” jeigu herbas. Suprogramuokite keturis skirtingus scenarijus kai monetos metimą stabdome:
// a.Iškritus herbui;
// b.Tris kartus iškritus herbui;
// c.Tris kartus iš eilės iškritus herbui;
document.write(`<h2>Sixth task</h2>`);

let herb = 0;
let digit = 0;

while(herb < 1) {
    money = rand(0, 1);

    if (money === 0) {
        document.write(`H`);
        break;
    }
    else {
        document.write(`S`);
    }

}

document.write(`<h2>B variantas</h2>`);

let counter = 0;

while (counter < 3) {
    money = rand(0, 1);

    if (money === 0) {
        document.write(`S`);
        // break;
    }
    else {
        document.write(`H`);
        counter++;
    }

}


document.write(`<h2>C variantas</h2>`);

let count = 0;

while (count < 3) {
    money = rand(0, 1);

    if (money === 0) {
        document.write(`S`);
        count = 0;
    }
    else {
        document.write(`H`);
        count++;

    }
    
}


// 7. Kazys ir Petras žaidžiai šaškėm. Petras surenka taškų kiekį nuo 10 iki 20, Kazys surenka taškų kiekį nuo 5 iki 25. Vienoje eilutėje išvesti žaidėjų vardus su taškų kiekiu ir “Partiją laimėjo: ​laimėtojo vardas​”. Taškų kiekį generuokite funkcija ​rand()​. Žaidimą laimi tas, kas greičiau surenka 222 taškus. Partijas kartoti tol, kol kažkuris žaidėjas pirmas surenka 222 arba daugiau taškų.
document.write(`<h2>Seventh task</h2>`);

let petropoints = 0;
let kaziopoints = 0;

// let score = 0;


while ( true) {
    let kazys = rand( 10, 20);
    let petras = rand(5, 25);

    petropoints += petras;
    kaziopoints += kazys;

    if(petras > kazys) {
        document.write(`<p>Partiją laimėjo Petras</p>`);
    } else if(petras === kazys) {
        document.write(`<p>Įvyko lygiosios</p>`);
    } else {
        document.write(`<p>Partiją laimėjo Kazys</p>`);
    }
    
    if(petropoints >= 222 || kaziopoints >= 222)
        break;
}

document.write(`<p>Petro taškai: ${petropoints} Kazio taškai ${kaziopoints}</p>`)

if( petropoints > kaziopoints) {
    document.write(`<h4>Žaidimą laimėjo Petras</h4>`);
} else if(petropoints === kaziopoints) {
    document.write(`<h4>Įvyko lygiosios</h4>`);
} else {
    document.write(`<h4>Žaidimą laimėjo Kazys</h4>`);
}


// 8. Sumodeliuokite vinies kalimą. Įkalimo gylį sumodeliuokite pasinaudodami rand() funkcija. Vinies ilgis 8.5cm (pilnai sulenda į lentą).
// a.“Įkalkite” 5 vinis mažais smūgiais. Vienas smūgis vinį įkala 5-20 mm. Suskaičiuokite kiek reikia smūgių.
// b.“Įkalkite” 5 vinis dideliais smūgiais. Vienas smūgis vinį įkala 20-30 mm, bet yra 50% tikimybė (pasinaudokite rand() funkcija tikimybei sumodeliuoti), kad smūgis nepataikys į vinį. Suskaičiuokite kiek reikia smūgių.
document.write(`<h2>8 task.A variantas</h2>`);

let vinis = 85 * 5;
let bendrasGylis = 0;
let smugiai = 0;

    while(bendrasGylis <= vinis) {
        let ikalimoGylis = rand(5, 20);
        // console.log(ikalimoGylis);
        bendrasGylis += ikalimoGylis;

        smugiai++;
    }


document.write(`Viniai ikalti prireike : ${smugiai} smugiu`);

document.write(`<h2>8.B variantas</h2>`);

 vinis = 85 * 5;
 bendrasGylis = 0;
 smugiai = 0;

    while(bendrasGylis <= vinis) {
        smugiai++;

        // 0 = Neptaikymas i vini;
        if(rand(0,1) === 0) {
            console.log(`nepataikem i vini`);
            continue; // Perejimas i sekancia iteracija
        }

         ikalimoGylis = rand(20, 30);
        // console.log(ikalimoGylis);
        bendrasGylis += ikalimoGylis;

        
    }
    document.write(`Viniai ikalti prireike : ${smugiai} smugiu`);

// PAPILDOMAI:
// Sugeneruokite stringą, kurį sudarytų 50 atsitiktinių skaičių nuo 1 iki 200, atskirtų tarpais. Skaičiai turi būti unikalūs (t.y. nesikartoti). Sugeneruokite antrą stringą, pasinaudodami pirmu, palikdami jame tik pirminius skaičius (t.y tokius, kurie dalinasi be liekanos tik iš 1 ir patys savęs). Skaičius stringe sudėliokite didėjimo tvarka, nuo mažiausio iki didžiausio.
// https://lt.wikipedia.org/wiki/Pirminis_skai%C4%8Dius
document.write(`<h2>Extra task</h2>`);