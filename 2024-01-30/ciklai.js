function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}


// Loop: Ciklas - veiksmu kartojimas iki kol gausim norima rezultata.

// CIklu rusys:
// 1.Inkrementiniai
// 2.Rekursiniai

// While ciklo aprasymas:
// while(kondicija)(kondicine logika){
// }
// i - increment

 let i = 0; 

while(i < 100) {
    // Interation - iteracija,vieno ciklo rotacija
    console.log(i + `Interacija`);

    i++; // Inkremento padidinimas ++ // dekrimentas --
}

i = 0;
let nuliai = 0;
let vienietai = 0;
let dvejietai = 0;

while(i < 4) {
    let skaicius = rand(0, 2);

    if(skaicius === 0)
        nuliai ++;
    if(skaicius === 1)
        vienietai++;
    if(skaicius === 2)
        dvejietai++;

    i++;
}

console.log(`Nuliai : ${nuliai}, Vienietai: ${vienietai}, Dvejietai : ${dvejietai}`);


// rulete 

//0 - zalias
//nelyginis - juodas;
//lyginis - raudonas

i  = 0;

while(i < 100) {
    let numbers = rand(0, 36);

    // Lyginio skaiciaus tikrinimas
    if(numbers % 2 === 0) {
        if (numbers ===  0) {
            document.write(`<div style="color:green;">${numbers}</div>`);
        } else {
        document.write(`<div style="color:red;">${numbers}</div>`);
    } } else {
        document.write(`<div style="color:black;">${numbers}</div>`);
    }


    i++;
}


// Ciklo aprasymas nezinant iteraciju kiekio.
// Cikla stabdome kai iskrenta skaicius 55.
// 

// 1.pavyzdys (ciklas nestabdomas)
    // i = 0;

    // while(i < 100) {
    //     let skaicius = rand(0,100);

    //     if (skaicius === 55) {
    //         console.log(`Rezultatas pasiektas`);
    //     }
    //     i++;
    // }

// // 2.Pavyzdys.ciklas stabdomas su kintamuoju
let working = true;
let kiekis = 0;

while(working){
    let numbers = rand (0, 100);

    if (numbers === 55) {
    console.log(`Rezultatas pasiektas`);
    working = false;
        }

        kiekis ++;
}
console.log(`Rezultatui pasiekti prireike: ${kiekis} iteraciju`);

// 3.Pavyzdys.ciklas stabdomas su break komanda

 kiekis = 0;

while(true){
    let numbers = rand (0, 100);

    if (numbers === 55) {
    console.log(`Rezultatas pasiektas`);
    break; // Ciklo nutraukimo komanda
    // break komanda nutraukia visa zemiau einanti koda
        }

        kiekis ++;
}
console.log(`Rezultatui pasiekti prireike: ${kiekis} iteraciju`);

// 4.Pavyzdys ciklo iteracijos praleidimas

i = 1;

while(i <= 10) {
    i++;

    if(i % 2 === 1){
       continue; // perejimas i sekancia iteracija 
    // continue komanda nutraukia visa zemiau einanti koda
    }

    console.log(`Gautas skaicius: ${i}`);
}

// For ciklas

// Perduodamos trys reiksmes atskirtos kabliataskiais,
// Pirmoji - inkremento deklaravimas
// Antroji - kondicija kuomet ciklas turi baigtis
// Trecioji -kas nutinka su inkrementu
for(let i = 0; i < 100; i++) {
        console.log(`Ciklas sukasu,dabartine iteracija:` +i);
}

for (let i = 0; i < 100; i--) {
    console.log(`Ciklas sukasi,dekremento principus,dabartine iteracija:` +i);

 }

//  1 uzduotys


//dvieju ciklu sprendimas
// for(let i = 0;i < 400; i++) {
//     for(let x = 0; x < 50; x++){
//     document.write(`*`);
//     }
//     document.write(`<br />`)
// }

// Vieno ciklo sprendimas 
let rezultatas = ``;

for(let i = 1; i < 400; i++) {
    rezultatas += `*`;

    if(i % 50 === 0 ); {
    rezultatas += '<br />';
    }
}

document.write(rezultatas)