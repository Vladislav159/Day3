function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// 1.Naršyklėje atspausdinkite visus nelyginius skaičius nuo 7 iki 31.
document.write(`<h2>First task</h2>`)

let r = 0;

for(r = 7; r <= 31; r = r+1 ) {
    // console.log(r);
    if (r > 7) {
          r++;
    }
    document.write( `<span> ${r} </span>`);
    console.log(  `${r} `);
    
    
}


// 2.Aprašykite ciklą kuris naršyklėje atspausdintų skaičių didėjimo modelį iki dešimties. Rezultato pavyzdys:
// 1 
// 1 2 
// 1 2 3 
// 1 2 3 4 
// 1 2 3 4 5 
// 1 2 3 4 5 6 
// 1 2 3 4 5 6 7 
// 1 2 3 4 5 6 7 8 
// 1 2 3 4 5 6 7 8 9 
// 1 2 3 4 5 6 7 8 9 10
 
document.write(`<h2>Second task</h2>`);

let totalRows = 10;
let output = '';


    for (let i = 1; i <= totalRows; i++) {
      for (let j = 1; j <= i; j++) {
        output += j + '';
      }
      console.log(output);
      document.write(`<p style="line-height: 6px; letter-spacing:3px;>${output} </p>`);
      output = '';
      
    }

// 3.Jums duotas stringas: “Žalgiris, Anadolu Efes, Barcelona BC”. Pasinaudodami ciklų pagalba iš stringo ištraukite vieną atsitiktinį komandos pavadinimą. Rezultate kablelių ir tarpų neturi būti. 
document.write(`<h2>Third task</h2>`);

let newstring = 'Žalgiris, Anadolu Efes, Barcelona BC';
console.log(newstring.length);

let zalgiris = newstring.substring(0, 8);
// document.write(zalgiris);

let anadolu = newstring.substring(10, 22);
// document.write(anadolu);

let barcelona = newstring.substring(24, 36);
// document.write(barcelona);
let komanda = '';

while (true) {
    komanda = rand(0, 2);

    console.log(komanda);
    if (komanda === 0) {
        document.write(`<p>${newstring.substring(0, 8)}</p>`)
    } else if (komanda === 1) {
        document.write(`<p>${newstring.substring(10, 22)}</p>`)
    } else {
        document.write(`<p>${newstring.substring(24, 36)}</p>`)
    }
    break;
}
// 4. Jums duotas stringas: “54 77 2 59 17 19 108”. Paimkite jame esančius skaičius ir patikrinkite juos ar jie yra pirminiai. T.y. ar natūralusis skaičius yra didesnis nei 1 ir be liekanos dalinasi tik iš savęs ir iš vieneto. 
// https://en.wikipedia.org/wiki/Prime_number 

document.write(`<h2>Task Four</h2>`);

let stringas = '54 77 2 59 17 19 108';
let skaicius = '';
let isPrime = true 
for(let i = 0; i < stringas.length; i++) {
    // console.log(stringas[i])
    if(stringas[i] === ' ') {
       for (let i = 2; i < skaicius; i++) {
    
            if (skaicius % i == 0) {
                isPrime = false;
                console.log(`next ${skaicius}`)
                break;
            } // console.log(skaicius)
       }
       skaicius = '';
    } else {
        skaicius += stringas[i];
    }

 }
// // 5.Jūs gavote užšifruotą žinutę: “gjrgkjxvbsigdvifpjqyzlzxsxzjnvgojlziaofdfnufymsjqsxxyknqcchmpepoljekhydgmfvhwipvopllndyuddcgxnleutsmprxqlcnxxthdhtpnutqocvtuanouumbkmlxexzmc”

// Surasti tai, kas joje yra paslėpta jums padės varlė. Ji tupi ežero krante, o kiekvieną raidė yra akmuo. Varlytė vienu šuoliu geba peršokti septynis akmenis. Su kiekvienu šuoliu priartėsite prie tikslo.
// Kas buvo paslėpta? 
document.write(`<h2>Task Five</h2>`)
let word = "Mgjrgkjxvbsigdvifpjqyzlzxsxzjnvgojlziaofdfnufymsjqsxxyknqcchmpepoljekhydgmfvhwipvopllndyuddcgxnleutsmprxqlcnxxthdhtpnutqocvtuanouumbkmlxexzmc";
   
for( i = 0; i < word.length; i += 7) {
    if (i > 0) {
        document.write(`${word[i]}`);
    }
}