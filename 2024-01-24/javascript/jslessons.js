
let name = 'John';
let secondname = 'Smith';
let x = '1992';
let y = '2024';
 
let age = y - x ;

document.write (`Aš esu ${name} ${secondname}.Man yra ${age} metai`);


// 2.Naudokite funkcija rand(). Sukurkite du kintamuosius ir naudodamiesi funkcija rand() jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą naršyklėje. 

console.log (`-----Antra uzduotis-------`)

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
    let a = rand(0, 4); 
    let b = rand(0, 4);
    console.log (a , b);

    let = a / b;
          b / a;

    if (a < b) {
        document.write (`${b}`);
    }
    else if (b > a) {
        document.write (`${a}`);
    } else (a === b) 

    document.write (`${a / b}, ${b / a}`);




    //  3. Sukurkite tris kintamuosius ir naudodamiesi funkcija rand() jiems priskirkite atsitiktines reikšmes nuo 0 iki 25. Raskite ir atspausdinkite kintamąjį turintį vidurinę reikšmę.
    console.log (`-----Trecia uzduotis-------`)


    let randOne = rand(0, 25);
        randTwo = rand(0, 25);
        randThree = rand(0, 25);
        console.log(randOne, randTwo, randThree);


    if (randOne <= randTwo) {
      if (randTwo <= randThree) {
        console.log(`Average number is ${randTwo}`);
      }
    }
    else {
      if(randOne <= randThree) {
        console.log(`Average number is ${randOne}`);
      } else {
          if (randThree >= randTwo) {
                console.log(`Average number is ${randThree}`);
        } else {
           console.log(`Average number is ${randTwo}`);
        }
      }
    }
    
    


// // 4 Sukurkite keturis kintamuosius ir ​rand()​ funkcija sugeneruokite jiems 
// reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų. 
console.log (`-----Ketvirta uzduotis-------`)


const no_1 = rand(0, 2);
const no_2 = rand(0, 2);
const no_3 = rand(0, 2);
const no_4 = rand(0, 2);
console.log(no_1, no_2, no_3, no_4);

let zeroes = 0;
let ones = 0;
let twos = 0;


if (no_1 === 0) {
    zeroes++;

  } else if (no_1 === 1) {
    ones++;
  } else {
    twos++;
  }


if (no_2 === 0) {
    zeroes++;
  } else if (no_2 === 1) {
    ones++;
  } else {
    twos++;
  }
  
if (no_3 === 0) {
    zeroes++;
  } else if (no_3 === 1) {
    ones++;
  } else {
    twos++;
  }
  
if (no_4 === 0) {
    zeroes++;
  } else if (no_4 === 1) {
    ones++;
  } else {
    twos++;
  }
  document.write (`Nuliu yra : ${zeroes}, ${ones}, ${twos}.`);

  // 5.Naudokite funkcija rand(). Sugeneruokite atsitiktinį skaičių nuo 1 iki 6 ir jį atspausdinkite atitinkame h tage. Pvz skaičius 3- rezultatas: <h3>3</h3>

  console.log (`-----Penkta uzduotis-------`)



  let skaicius = Math.floor(Math.random() * 6 ) + 1;
  let tagas = "<h" + skaicius + ">";
  document.write(tagas + skaicius + "</h" + skaicius + ">")



  // 6. Naudokite funkcija rand(). Atspausdinkite 3 skaičius nuo -10 iki 10. Skaičiai mažesni už 0 turi būti žali, 0 - raudonas, didesni už 0 mėlyni. Rezultatą atvaizduoti naršyklės lange.Pavyzdys:-5(zalias) 0(raudonas) 15(melynas)
  
  console.log (`-----Sesta uzduotis-------`)

  
  let numOne = rand(-10, 10); 
      numTwo = rand(-10, 10);
      numThree = rand(-10, 10);
      console.log (numOne, numTwo, numThree);

      let green = 0;
      let red = 0;
      let blue = 0;

      if (numOne < 0 ) {
          document.write (`<span style="color: green"> ${numOne}</span>`);
      }
      else if (numOne === 0 ){
          document.write (`<span style="color: red"> ${numOne} </span>`);
      }
      else {
          document.write (`<span style="color: blue"> ${numOne} </span>`);
      }

      if (numTwo < 0 ) {
        document.write (`<span style="color: green"> ${numTwo}</span>`);
    }
    else if (numTwo === 0 ) {
        document.write (`<span style="color: red"> ${numTwo} </span>`);
    }
    else {
        document.write ( `<span style="color: blue"> ${numTwo} </span>`);
    }

    if (numThree < 0 ) {
      document.write (`<span style="color: green"> ${numThree}</span>`);
  }
  else if (numThree === 0 ){
      document.write (`<span style="color: red"> ${numThree} </span>`);
  }
  else {
      document.write (`<span style="color: blue"> ${numThree} </span>`);
  }

   


  // 8.Naudokite funkcija rand(). Sukurkite tris kintamuosius su atsitiktinėmis reikšmėmis nuo 0 iki 100. Suskaičiuokite jų aritmetinį vidurkį. Ir aritmetinį vidurkį atmetus tas reikšmes, kurios yra mažesnės nei 10 arba didesnės nei 90. Abu vidurkius atspausdinkite.
  

  console.log (`-----Astunta uzduotis-------`)


    let first = rand(0, 100); 
       second = rand(0, 100);
       third = rand(0, 100);
       console.log(first, second, third);

       let average = (first + second + third) / 3;

// 7. Įmonė parduoda žvakes po 1 EUR. Perkant daugiau kaip už 1000 EUR taikoma 3 % nuolaida, daugiau kaip už 2000 EUR - 4 % nuolaida. Parašykite programą, kuri skaičiuos žvakių kainą ir atspausdintų atsakymą kiek žvakių ir kokia kaina perkama. Žvakių kiekį generuokite ​rand()​ funkcija nuo 5 iki 3000.

console.log (`-----Septynta uzduotis-------`)

 let kiekis = rand(5, 3000);

 document.write ( `Perkamas kiekis : <strong>${kiekis}</strong>`);

 if(kiekis > 1000) {
    suma = kiekis-kiekis * 0.03;
 } else if (kiekis > 2000) {
    suma = kiekis - kiekis * 0.04;
 }

 document.write(`<p> Galutine suma: ${suma.toFixed(2)}</p>}`);

//8. Naudokite funkcija rand(). Sukurkite tris kintamuosius su atsitiktinėmis reikšmėmis nuo 0 iki 100. Suskaičiuokite jų aritmetinį vidurkį. Ir aritmetinį vidurkį atmetus tas reikšmes, kurios yra mažesnės nei 10 arba didesnės nei 90. Abu vidurkius atspausdinkite. 
console.log (`-----Astunta uzduotis-------`)

let firstDigit = rand(0, 100);
let secondDigit = rand(0, 100);
let thirdDigit = rand(0, 100);
console.log(firstDigit, secondDigit, thirdDigit);

console.log(`First Average: ${((firstDigit + secondDigit + thirdDigit) / 3).toFixed(2)}`);

let sum = 0;
let kiek = 0;
if(firstDigit > 10 && firstDigit < 90) {
  sum += firstDigit;
  kiek++;
}
if(secondDigit > 10 && secondDigit < 90) {
  sum += secondDigit;
  kiek++;
}
if(thirdDigit > 10 && thirdDigit < 90) {
  sum += thirdDigit;
  kiek++;
}
else {
  console.log(`Second average: ${(sum / kiek).toFixed(2)}`);
}


//9. Padarykite skaitmeninį laikrodį, rodantį valandas, minutes ir sekundes. Valandom, minutėm ir sekundėm sugeneruoti panaudokite funkciją rand(). Sugeneruokite skaičių nuo 0 iki 300. Tai papildomos sekundės. Skaičių pridėkite prie jau sugeneruoto laiko. Atspausdinkite laikrodį prieš ir po sekundžių pridėjimo ir pridedamų sekundžių skaičių.

document.write (`<h2>Extra Watches</h2>`)

let hours = rand(0, 23);
let minutes = rand(0, 59);
let seconds = rand(0, 59);

document.write(`<div class="clock">
          <span>${hours}</span>
          <span>${minutes}</span>
          <span>${seconds}</span>
      </div>`);

document.write('<h2>Modifikuotas laikrodis</h2>');

let randomSeconds = rand(0, 300);


let newSeconds = randomSeconds + seconds;
let addMinutes = Math.floor(newSeconds / 60);
if(newSeconds > 59) {
seconds = newSeconds - (addMinutes * 60); 
}

let newMinutes = minutes + addMinutes;

if(newMinutes > 59) {
minutes = newMinutes - 60;
hours++;
}

if(hours >= 24) {
hours = 0;
}

console.log('Sekundės:' + randomSeconds);

document.write(`<div class="clock">
<span>${hours}</span>
<span>${minutes}</span>
<span>${seconds}</span>
</div>`);


//10 Papildomas.
// Naudokite funkcija rand(). Sugeneruokite 6 kintamuosius su atsitiktinem reikšmėm nuo 1000 iki 9999. Atspausdinkite reikšmes viename strige, išrūšiuotas nuo didžiausios iki mažiausios, atskirtas tarpais. Naudoti ciklų ir masyvų NEGALIMA.

console.log (`-----10 uzduotis-------`)

let rant = rand(1000, 9999);
let rant_two = rand(1000, 9999);
let rant_three = rand(1000, 9999);
let temp = 0;

console.log(rant, rant_two, rant_three );

if(rant > rant_three) {
    temp = rant;
    rant = rant_three;
    rant_three = temp ;
}
if (rant_two > rant_three) {
    temp = rant_two;
    rant_two = rant_three;
    rant_three = temp ;
}
if(rant > rant_two){   
   temp = rant_two;
    rant_two = rant;
    rant = temp;
}
console.log(rant, rant_two, rant_three );