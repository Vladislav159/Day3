function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// 1.Sugeneruokite masyvą iš 10 elementų, kurio elementai būtų masyvai iš 5 elementų su reikšmėmis nuo 5 iki 25.
document.write(`<h3>First task</h3>`);

const defaultArray = [];

    for(let pirmas = 0; pirmas < 10; pirmas++) {
        defaultArray[pirmas] = [];

         for(let antras = 0; antras < 5; antras++) {
            defaultArray[pirmas][antras] = rand(5, 25);
         }
    }

    console.log(defaultArray);

document.write(`<br></br>`);
document.write(`<h3>Second task</h3>`);
// 2.Naudodamiesi 1 uždavinio masyvu:
//  a. Suskaičiuokite kiek masyve yra elementų didesnių už 10;
document.write(`<h5>a</h5>`);

let valueOver10 = 0;

for(let x = 0; x < defaultArray.length; x++) {

    
     for( let y = 0; y < defaultArray[x].length; y++) {
         
        if(defaultArray[x][y] > 10)
            valueOver10++;   
        
     }

}

console.log(`Masyve yra elementų didesnių už 10: ${valueOver10}`);

document.write(`<br></br>`);

//  b. Raskite didžiausio elemento reikšmę;
document.write(`<h5>b</h5>`);

let max = 0;

for( x = 0; x < defaultArray.length; x++) {

     for(y = 0; y < defaultArray.length; y++) {
        
       if(defaultArray[x][y] > max) {
            max = defaultArray[x][y];
       } 

     }
}

console.log(`Didziausio elemento reiksme:${max}`);

document.write(`<br></br>`);
//  c. Suskaičiuokite kiekvieno antro lygio masyvų su vienodais indeksais sumas (t.y. suma reikšmių turinčių indeksą 0, 1 ir t.t.)
document.write(`<h5>c</h5>`);

let summa = 0;

for( x = 0; x < defaultArray.length; x++) {

     for(y = 0; y < defaultArray[x].length; y++) {
        
       if(defaultArray[x][y] > 0) {
            summa += defaultArray[x][y];
       } 

     }
}

console.log(`Summa: ${summa}`);

const sumos = [0,0,0,0,0,0,0,0,0,0];

for( x = 0; x < defaultArray.length; x++) {

    for(y = 0; y < defaultArray[x].length; y++) {
       
      
           sumos[x] += defaultArray[x][y];
       

    }
}
console.log(sumos)


document.write(`<br></br>`);
//  d.Visus antro lygio masyvus “pailginkite” iki 7 elementų.
document.write(`<h5>d</h5>`);

for( x = 0; x < defaultArray.length; x++) {
   
     for(y = 0; y < 7; y++) {  
          
            let digits = rand(5, 25);
            defaultArray[x].push(digits);

     }
}
console.log(defaultArray);


document.write(`<br></br>`);
//  f. Suskaičiuokite kiekvieno iš antro lygio masyvų elementų sumą atskirai ir sumas panaudokite kaip reikšmes sukuriant naują masyvą. T.y. pirma naujo masyvo reikšmė turi būti lygi mažesnio masyvo, turinčio indeksą 0 dideliame masyve, visų elementų sumai .
document.write(`<h5>f</h5>`);
const rowsums = [];

for(let y = 0;y < defaultArray.length; y++) {
    let summmm = 0

    for(let x = 0; x < defaultArray[y].length; x++) {
        summmm += defaultArray[y][x];
    }

    rowsums.push(summmm);
    
}
console.log(rowsums);



document.write(`<br></br>`);
// 3. Sukurkite masyvą iš 10 elementų. Kiekvienas masyvo elementas turi būti masyvas su atsitiktiniu kiekiu nuo 2 iki 20 elementų. Elementų reikšmės atsitiktinai parinktos raidės iš intervalo A-Z. Išrūšiuokite antro lygio masyvus pagal abėcėlę (t.y. tuos kur su raidėm).
document.write(`<h3>Third task</h3>`);

const thirdArray = [];


    for(let c = 0; c < 10; c++) {
        thirdArray[c] = [];
        let numb = rand(2, 20);
          for(let b = 0; b < numb ; b++) {
            let r = Math.floor(Math.random() * 26);
            let strinG =  String.fromCharCode(65 + r);
           
            thirdArray[c].push(strinG);
            thirdArray[c].sort();
        }
            
        }
    
    console.log(thirdArray);

    
document.write(`<br></br>`);
// 4.Išrūšiuokite trečio uždavinio pirmo lygio masyvą taip, kad elementai kurių masyvai trumpiausi eitų pradžioje. Masyvai kurie turi bent vieną “K” raidę, visada būtų didžiojo masyvo visai pradžioje.
document.write(`<h3>Fourth task</h3>`);

thirdArray.sort((a, b) => a.length - b.length);
thirdArray.sort((a,b) => (a.includes('K') ? -1 : 1) - (b.includes('K') ? -1 : 1));

console.log(thirdArray);
document.write(`<br></br>`);
// 5.Sukurkite masyvą iš 10 elementų. Masyvo reikšmes užpildykite pagal taisyklę: generuokite skaičių nuo 0 iki 5. Ir sukurkite tokio ilgio masyvą. Jeigu reikšmė yra 0 masyvo nekurkite. Antro lygio masyvo reikšmes užpildykite atsitiktiniais skaičiais nuo 0 iki 10. Ten kur masyvo nekūrėte reikšmę nuo 0 iki 10 įrašykite tiesiogiai.
document.write(`<h3>Fifth task</h3>`);

const fifthArray2 = [];

    for(let u = 0; u < 10; u++) {
        let numero = rand(0, 5);
          if(numero === 0){
             fifthArray2.push(rand(0, 10));
            } else {
            let subArray  = [];
            for(let k = 0;k < numero; k++){
                subArray.push(rand(0, 10));
            }  
            fifthArray2.push(subArray);
            
        }
     } 

    console.log(fifthArray2);

    const fiftharay =[];

for (let s = 0; s < 10; s++) {
    let numbero = rand(0, 5);
    if (numbero === 0) {
        fiftharay[s] = numbero;
    } else {
        fiftharay[s] = [];
        for (let r = 0; r < numbero; r++) {
            numbero = rand(0, 10);
            fiftharay[s].push(numbero);
        }


    }
}
console.log(fiftharay);

document.write(`<br></br>`);
// 6. Paskaičiuokite 5 uždavinio masyvo visų reikšmių sumą ir išrūšiuokite masyvą taip, kad pirmiausiai eitų mažiausios masyvo reikšmės arba jeigu reikšmė yra masyvas, to masyvo reikšmių sumos.
document.write(`<h3>Sixth task</h3>`);

let suma = 0;


for( u = 0; u < fifthArray2.length; u++) {

     for(k = 0; k < fifthArray2[u].length; k++) {
        
       if(fifthArray2[u][k] > 0) {
            suma += fifthArray2[u][k];
       } 
      
     }
     
}
console.log(suma);


//  function compareFdn  (a, b)  { 
//         if (a < b) {
//           return -1;
//         } else if (a > b) {
//           return 1;
//         }
//         return 0;
//       };

//  fifthArray2.sort(compareFdn);
//  fifthArray2.push(compareFdn);


document.write(`<br></br>`);

