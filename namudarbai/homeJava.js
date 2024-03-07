function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


// 2.Naudokite funkcija rand(). Sukurkite du kintamuosius ir naudodamiesi funkcija rand() jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą naršyklėje. 
// Papildomai:
// Suapvalinkite skaičių iki dviejų skaičių po kablelio.
document.write(`<h3>Task two</h3>`);

let a = rand(0, 4);
let b = rand(0, 4);
document.write(a , b)
let resultatas = a / b;
                 b / a;


if(a > b) {
    document.write(`<h5>${a}</h5>`);
} else if(a < b) {
    document.write(`<h5>${b}</h5>`);
} else {
    document.write(`<h5> ${a === b}</h5>`);
}


document.write(resultatas.toFixed(2));

document.write(`<br></br>`);
// 3.Sukurkite tris kintamuosius ir naudodamiesi funkcija rand() jiems priskirkite atsitiktines reikšmes nuo 0 iki 25. Raskite ir atspausdinkite kintamąjį turintį vidurinę reikšmę.
document.write(`<h3>Task tthree</h3>`);

let c = rand(0, 25);
let d = rand(0, 25);
let f = rand(0, 25);

document.write(`${c}, ${d}, ${f}`);

if(c <= d) {
    if(d <= f)
    document.write(`Averrage number is: ${d}`);
} else {
   if (c <= f){
    document.write(`Averrage number is: ${c}`);
   }
    else if ( f >= d) {
     document.write(`Average number is: ${f}`);
    } else  {
        document.write(`Average number is: ${d}`);
    }

}

document.write(`<br></br>`);
// 4.Sukurkite keturis kintamuosius ir ​rand()​ funkcija sugeneruokite jiems 
// reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų. (sprendimui masyvo nenaudoti).
document.write(`<h3>Task four</h3>`);

let one = rand(0, 2);

let zeroes = 0;
let ones = 0;
let twos = 0;

    if ( one === 0 ) {
    zeroes++;
    }
    else if (one === 1){
        ones++;
    } else {
        twos++;
    
    }

document.write(`Nuliu yra:${zeroes},
                Vienietu yra:${ones},
                Dvejetu yra:${twos}`);


                document.write(`<br></br>`);
//5. Naudokite funkcija rand(). Sugeneruokite atsitiktinį skaičių nuo 1 iki 6 ir jį atspausdinkite atsitinkame h tage. Pvz skaičius 3- rezultatas: <h3>3</h3>
document.write(`<h3>Task five</h3>`);

let rand_number = rand(1, 6);
let tagas = '<h' + rand_number + '>';
document.write(tagas + rand_number + '</h' + rand_number +'>' );

document.write(`<br></br>`);
// 6.Naudokite funkcija rand(). Atspausdinkite 3 skaičius nuo -10 iki 10. Skaičiai mažesni už 0 turi būti žali, 0 - raudonas, didesni už 0 mėlyni. 
// Rezultatą atvaizduoti naršyklės lange.
// Pavyzdys:
// -5 0 15
document.write(`<h3>Task Six</h3>`);

let numb_One = rand(-10, 10);
let numb_Two = rand(-10, 10);
let numb_Three = rand(-10, 10);

let red = 0;
let blue = 0;
let green = 0;

if(numb_One < 0){
    document.write(`<span style="color:green">${numb_One}</span>`);
}else if (numb_One === 0 ) {
    document.write(`<span style="color:red">${numb_One}</span>`);
}else  
    document.write(`<span style="color:blue">${numb_One}</span>`);


if(numb_Two < 0){
    document.write(`<span style="color:green">${numb_Two}</span>`);
}else if (numb_Two === 0 ) {
    document.write(`<span style="color:red">${numb_Two}</span>`);
}else 
    document.write(`<span style="color:blue">${numb_Two}</span>`);


if(numb_Three < 0){
    document.write(`<span style="color:green">${numb_Three}</span>`);
}else if (numb_Three === 0 ) {
    document.write(`<span style="color:red">${numb_Three}</span>`);
}else 
    document.write(`<span style="color:blue">${numb_Three}</span>`);


    
document.write(`<br></br>`);
// 7.Įmonė parduoda žvakes po 1 EUR. Perkant daugiau kaip už 1000EUR taikoma 3 % nuolaida, daugiau kaip už 2000 EUR - 4 % nuolaida. Parašykite programą, kuri skaičiuos žvakių kainą ir atspausdintų atsakymą kiek žvakių ir kokia kaina perkama. Žvakių kiekį generuokite ​rand()​ funkcija nuo 5 iki 3000.
document.write(`<h3>Task seven</h3>`);



document.write(`<br></br>`);
// 8.Naudokite funkcija rand(). Sukurkite tris kintamuosius su atsitiktinėmis reikšmėmis nuo 0 iki 100. Suskaičiuokite jų aritmetinį vidurkį. Ir aritmetinį vidurkį atmetus tas reikšmes, kurios yra mažesnės nei 10 arba didesnės nei 90. Abu vidurkius atspausdinkite. 
// Papildomai:
// Rezultatus apvalinkite iki sveiko skaičiaus.
document.write(`<h3>Task eight</h3>`);



document.write(`<br></br>`);
//9 Padarykite skaitmeninį laikrodį, rodantį valandas, minutes ir sekundes. Valandom, minutėm ir sekundėm sugeneruoti panaudokite funkciją rand(). Sugeneruokite skaičių nuo 0 iki 300. Tai papildomos sekundės. Skaičių pridėkite prie jau sugeneruoto laiko. Atspausdinkite laikrodį prieš ir po sekundžių pridėjimo ir pridedamų sekundžių skaičių.
document.write(`<h3>Task nine</h3>`);





document.write(`<br></br>`);


// 10.Naudokite funkcija rand(). Sugeneruokite 6 kintamuosius su atsitiktinem reikšmėm nuo 1000 iki 9999. Atspausdinkite reikšmes viename strige, išrūšiuotas nuo didžiausios iki mažiausios, atskirtas tarpais. Naudoti ciklų ir masyvų NEGALIMA.
document.write(`<h3>Task ten</h3>`);






let i = 1;

while(i <= 10) {
    i++;

    if(i % 2 === 1){
       continue; // perejimas i sekancia iteracija 
    // continue komanda nutraukia visa zemiau einanti koda
    }

    console.log(`Gautas skaicius: ${i}`);
}


document.write(`<br></br>`);
// Sugeneruokite 300 atsitiktinių skaičių nuo 0 iki 300, atspausdinkite juos atskirtus tarpais ir suskaičiuokite kiek tarp jų yra didesnių už 150.  Skaičiai didesni nei 275 turi būti raudonos spalvos.

document.write(`<h3>Task 11</h3>`);

let x = 0;
let numb = 0;
let tarpas =  `,`;

while(x < 300) {
    let numb = rand(0, 300);
    numb += tarpas;

    if( numb > 150){
        numb++;
        console.log(numb)
    } else if ( numb > 275){
        document.write(`<span style ="color:red;"> ${numb}</span>`);
    } else {
        document.write(`${numb}`)
    }
    x++;
}


document.write(`<br></br>`);

// Vienoje eilutėje atspausdinkite visus skaičius nuo 1 iki 3000, kurie dalijasi iš 77 be liekanos. Skaičius atskirkite kableliais. Po paskutinio skaičiaus kablelio neturi būti. Jeigu reikia, panaudokite css, kad visi rezultatai matytusi ekrane.

document.write(`<h3>Task 11</h3>`);

let p = 0;
let trap = `,`;

for(p = 0; p < 3000; p++) {
 

    if ( p % 77 === 0 ) {
        document.write(` ${p + trap}`)
    } else ( p !== 2096) 
        document.write(` `);
    
    p++;
}

document.write(`<br></br>`);

document.write(`<h3>Task 12</h3>`);
// Nupieškite kvadratą iš “*”, kurio kraštinės sudaro 100 “*”. Panaudokite css stilių, kad kvadratas ekrane atrodytų kvadratinis. (Priskirkite reikiamą eilučių aukštį);

let res = '';


for(let k = 1;k < 25 * 25;k++){
    res += '*';
    if(k % 25 === 0 ) {
        res += `</br>`
        }
    
   
}
document.write(res);

document.write(`<h3>Task 13</h3>`);

// Metam monetą. Monetos kritimo rezultatą imituojam rand() funkcija, kur 0 yra herbas, o 1 - skaičius. Monetos metimo rezultatus išvedame į ekraną atskiroje eilutėje: “S” jeigu iškrito skaičius ir “H” jeigu herbas. Suprogramuokite tris skirtingus scenarijus kai monetos metimą stabdome:
// Iškritus herbui;
// Tris kartus iškritus herbui;
// Tris kartus iš eilės iškritus herbui;


// S -skaicius(1,2), H - herbas(0) + break;

let sk = 0 ;
let h = 0 ;

for(let h = 0;h < 1;h++){
    moneta = rand(0, 1);

    if(moneta === 0){
        document.write(`H`)
        break;
    }else if (moneta > 0 ) {
        document.write(`S`)
        
    }
}


// Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29), kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25.


const arr = [];

for(let u = 0; u < 30; u++){
    let digi = rand(5, 25)
    
        arr.push(digi);
    
}
console.log(arr)

// Naudodamiesi 1 uždavinio masyvu:
// a. Suskaičiuokite kiek masyve yra reikšmių didesnių už 10;

// b. Raskite didžiausią masyvo reikšmę ir jos indeksą arba indeksus jeigu yra keli;

// c. Suskaičiuokite visų porinių (lyginių) indeksų reikšmių sumą;

// d. Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo reikšmes minus tos reikšmės indeksas;

// e. Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25, kad bendras masyvas padidėtų iki indekso 39;

// f. Iš masyvo elementų sukurkite du naujus masyvus. Vienas turi būti sudarytas iš neporinių indeksų reikšmių, o kitas iš porinių;

// g. Pirminio masyvo elementus su poriniais indeksais padarykite lygius 0 jeigu jie didesni už 15;

// h. Suraskite pirmą indeksą, kurio elemento reikšmė didesnė už 10;

// i. Iš masyvo ištrinkite visus elementus turinčius porinį indeksą;
