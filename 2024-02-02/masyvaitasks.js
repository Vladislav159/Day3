function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// 1.Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29), kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25.
// 
document.write(`<h2>first task</h2>`);
const rand_numb = [];

    for (let i = 0 ;i < 30; i++) {
        rand_numb.push(rand(5, 25));
    }
    document.write(rand_numb);

    document.write(`<h2>second task</h2>`);
// 2.Naudodamiesi 1 uždavinio masyvu:
    // a)Suskaičiuokite kiek masyve yra reikšmių didesnių už 10;
    document.write(`2.a`);

    let valueOver10 =  0;

    for (let i = 0; i < rand_numb.length; i++ ) {
        if (rand_numb[i] > 10) {
            valueOver10++;
        } 
    }
    document.write(valueOver10);

    document.write(`<br></br>`)
    // b)Raskite didžiausią masyvo reikšmę ir jos indeksą arba indeksus jeigu yra keli;
    document.write(`2.b`);

    let number = rand_numb.slice(0, rand_numb.length);
    let highestNumb = number[0];
    let indexes = [];

    for (let i = 0; i < number.length; i++) {
        if (number[i] > highestNumb) {
            indexes.push(i);
        }
    }
    for (let i = 0;i < number.length; i++ ) {
        if (highestNumb === number[i]){
            indexes.push(i);
        }
    }

    document.write(`Number: ${highestNumb} , indexes ${indexes}`);
    document.write(`<br></br>`);

    // c)Suskaičiuokite visų porinių (lyginių) indeksų reikšmių sumą;

    document.write(`2.c`);

    let sum = 0;
    for (let i = 0; i < rand_numb.length; i++) {
        if(rand_numb[i] % 2 === 0) {
            sum += rand_numb[i];
        }
    }
    document.write(`Sum: ${sum}`);
    document.write(`<br></br>`);


    // d)Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo reikšmes minus tos reikšmės indeksas;
    document.write(`2.d`);

    const newArray = [];

    for (let i = 0; i < rand_numb.length; i++) {
        newArray.push(rand_numb[i] - i);
    }


    document.write(`${newArray}`);
    document.write(`<br></br>`);

    // e)Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25, kad bendras masyvas padidėtų iki indekso 39;

    document.write(`2.e`);

    newLongerArray = rand_numb.slice(0, rand_numb.length);

    while ( newLongerArray.length < 40) {
        newLongerArray.push(rand(5, 25));
    }

    document.write(`${newLongerArray}`);
    document.write(`<br></br>`);


    // f)Iš masyvo elementų sukurkite du naujus masyvus. Vienas turi būti sudarytas iš neporinių indeksų reikšmių, o kitas iš porinių;
    document.write(`2.f`);

    const primeIndexArray = [];
    const secondaryIndexArray = [];

    for (let i = 0; i < rand_numb.length; i++){
        if( i % 2 === 0 ) {
            secondaryIndexArray.push(rand_numb[i]) ;  
        } else {
            primeIndexArray.push(rand_numb[i]);
        }
    }

    document.write(`Prime index: ${primeIndexArray}`);
    document.write(`</br>`);

    document.write(`Secondary index :${secondaryIndexArray}`);
    document.write(`<br></br>`);


    // g)Pirminio masyvo elementus su poriniais indeksais padarykite lygius 0 jeigu jie didesni už 15;
    document.write(`2.g`);

        const arrayWithZeroes = [];

        for (let i = 0; i < rand_numb.length; i++) {
            if (i % 2 === 0) {
                if (rand_numb[i] > 15) {
                arrayWithZeroes.push(0);
                }
            } else {
                arrayWithZeroes.push(rand_numb[i]);
            }
        }
        document.write(`Array with nullified values: ${arrayWithZeroes}`);

        document.write('<br/><br/>');

    // h)Suraskite pirmą indeksą, kurio elemento reikšmė didesnė už 10;
    document.write(`2.h`);

        let firstIndex = 0;

        for (let i = 0; i < rand_numb.length; i++) {
            if (rand_numb[i] > 10) {
                firstIndex = rand_numb[i];
                break;
            }
        }
        document.write(`Index of first value above 10: ${firstIndex}`);

        document.write('<br/><br/>');

    // i)Iš masyvo ištrinkite visus elementus turinčius porinį indeksą;
    document.write(`2.i`);

    let removedSecondaryElements = [];

        for (let i = 1; i < rand_numb.length; i += 2) {
            removedSecondaryElements.push(rand_numb[i]);
        }
        
        document.write(`Remaining array w/o secondary indexes: ${removedSecondaryElements}`);

        document.write('<br/><br/>');


    document.write(`<h2>third task</h2>`);
    // 3. Sugeneruokite du masyvus, kurių reikšmės yra atsitiktiniai skaičiai nuo 100 iki 999. Masyvų ilgiai 100. Masyvų reikšmės turi būti unikalios savo masyve (t.y. neturi kartotis).

    const array1 = [];
    const array2 = [];

    while (array1.length < 100 && array2.length < 100) {
        const tempNumber = rand(100, 999);
        const tempNumber2 = rand(100, 999);
        if (!array1.includes(tempNumber) && array1.length < 100){
            array1.push(tempNumber);
        }
        if (!array2.includes(tempNumber2) && array2.length < 100){
            array2.push(tempNumber2);
        }
    }

    document.write(`Array 1:${array1}`);
    document.write(`Array 2:${array2}`);


    document.write('<br/><br/>');

    document.write(`<h2>Fourth task</h2>`);
    // 4. Sugeneruokite masyvą, kuris būtų sudarytas iš reikšmių, kurios yra pirmame 3 uždavinio masyve, bet nėra antrame 3 uždavinio masyve.
    const newArray2 = [];

    for (let i = 0; i < array1.length; i++) {
        if(!array2.includes(array1[i])) {
            newArray2.push(array1[i]);
        }
    }
    document.write(`Non dublicating numbers: ${ newArray2}`);
    document.write('<br/><br/>');


    document.write(`<h2>Fifth task</h2>`);
    // 5. Sugeneruokite masyvą iš elementų, kurie kartojasi abiejuose 3 uždavinio masyvuose.

    const newArrayXXX = [];

        for (let i = 0; i < array1.length; i++) {
    
            if (array2.includes(array1[i])) {
                newArrayXXX.push(array1[i])
        }
        }
        document.write(`Dublicating: ${newArrayXXX}`);
        document.write('<br/><br/>');


    document.write(`<h2>Sixth task</h2>`);
    // 6. Sugeneruokite 10 skaičių masyvą pagal taisyklę: Du pirmi skaičiai- atsitiktiniai nuo 5 iki 25. Trečias, pirmo ir antro suma. Ketvirtas- antro ir trečio suma. Penktas trečio ir ketvirto suma ir t.t.
    const tenNumbers = [rand(5, 25), rand(5, 25)];

    for (i = 2; i < 10; i++) {
        tenNumbers[tenNumbers.length] = tenNumbers[i - 2] + tenNumbers[i - 1];
    }
    
    document.write(`${tenNumbers}`);
    document.write('<br/><br/>');
    
    // 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200. Suskaičiuokite kiek yra kiekvienos raidės.
    document.write(`<h2>Seventh task</h2>`);

    let randAbc = [];
        const raides = ["A", "B", "C", "D"];

        let kiekisA = 0;
        let kiekisB = 0;
        let kiekisC = 0;
        let kiekisD = 0;

for (let i = 0; i < 200; i++) {
    randAbc.push(raides[rand(0, raides.length - 1)])
    if (randAbc[i] === "A") {
        kiekisA++;
    }
    if (randAbc[i] === "B") {
        kiekisB++;
    }
    if (randAbc[i] === "C") {
        kiekisC++;
    }
    if (randAbc[i] === "D") {
        kiekisD++;
    }
}
console.log(`A: ${kiekisA}, B: ${kiekisB}, C: ${kiekisC}, D: ${kiekisD}`);

    // 8 .Išrūšiuokite 7 uždavinio masyvą pagal abecėlę.
    document.write(`<h2>Eight task</h2>`);

    const filtruotas = randAbc.sort();
    console.log(filtruotas);


    // 9.Sugeneruokite 3 masyvus pagal 7 uždavinio sąlygą. Sudėkite masyvus, sudėdami reikšmes pagal atitinkamus indeksus. Paskaičiuokite kiek unikalių (po vieną, nesikartojančių) reikšmių ir kiek unikalių kombinacijų gavote.
    // Pvz.
    // [‘AAA’, ‘BBB’, ‘CCC’, ‘ACC’] = Viena unikali reikšmė “ACC”
    // [‘ACA’, ‘ABA’, ‘ACA’, ‘ADA’] = Dvi unikalios kombinacijos “ABA” ir “ADA”

    document.write(`<h2>Ninth task</h2>`);

    const arrayFirst = ["A", "B", "C", "D"];
  
    const newArrayss = [];
    const newArrayDu = [];
    const newArrayTrys = [];
    
    for(let i = 0; i < 200; i++){
       
        newArrayss.push(arrayFirst[rand(0, arrayFirst.length - 1)]);
        newArrayDu.push(arrayFirst[rand(0, arrayFirst.length - 1)]);
        newArrayTrys.push(arrayFirst[rand(0, arrayFirst.length - 1)]);

    } 

    const raidziuMasyvas = [];
    for(let i = 0; i < 200; i++) {
        raidziuMasyvas.push(newArrayss[i] + newArrayDu[i] +  newArrayTrys[i]);
    }
    
    console.log(raidziuMasyvas);
    
    // Apdorojimas
    
    const tikUnikaliosReiksmes = [];
    
    for(let i = 0; i < raidziuMasyvas.length; i++) {
        if(raidziuMasyvas[i] === 'AAA' || raidziuMasyvas[i] === 'BBB' || raidziuMasyvas[i] === 'CCC' || raidziuMasyvas[i] === 'DDD')
            continue;
    
        tikUnikaliosReiksmes.push(raidziuMasyvas[i]);
    }
    

    
    console.log(tikUnikaliosReiksmes);
 
    document.write(`<h1>Masyvay Repeat</h1>`)
   
    // 1.Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29), kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25.
    // 

    const arrayVienas = [];

    for ( i = 0;i < 30; i++) {
            const digits = rand(5, 25);
            arrayVienas.push(digits);
    }
    console.log(arrayVienas);

    // 2.a) Suskaičiuokite kiek masyve yra reikšmių didesnių už 10;

    let valOver10 = 0;

    for ( i = 0;i < arrayVienas.length; i++) {
        if ( arrayVienas[i] > 10){
            valOver10++;
        }
    }
    document.write(valOver10);

    // 2.b) Raskite didžiausią masyvo reikšmę ir jos indeksą arba indeksus jeigu yra keli;

    let highNum = 0;
    let maxindex = 0;

    for ( i = 0;i < arrayVienas.length; i++) {
        // console.log( highNum, arrayVienas[i], maxindex );
        if(arrayVienas[i] > highNum ){
            highNum = arrayVienas[i];
            maxindex = i;
        }
       
    }

    console.log(`Number: ${highNum} , indexes ${maxindex}`);

    const newMasyvas = [];

    for( i = 0;i < arrayVienas.length; i++){
            if(highestNumb === arrayVienas[i]){
                newMasyvas.push(i);
            }
    }

    console.log(newMasyvas);


    // c)Suskaičiuokite visų porinių (lyginių) indeksų reikšmių sumą;

    let summa = 0;

    for (let i = 0; i < arrayVienas.length; i++) {
        if(arrayVienas[i] % 2 === 0) {
            summa += arrayVienas[i];
        }
    }

    console.log(`Suma : ${summa}`);
    document.write(`<br></br>`);
    
    // 2.d) Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo reikšmes minus tos reikšmės indeksas;

    const newMassive = [];

    for (let i = 0; i < arrayVienas.length; i++) {
        newMassive.push(arrayVienas[i] - i);
    }


    console.log(`${newMassive}`);
    document.write(`<br></br>`);

    // 2. e) Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25, kad bendras masyvas padidėtų iki indekso 39;

    for ( i = 0;i < 10; i++) {
        const digits = rand(5, 25);
        arrayVienas.push(digits);
    }
    console.log(arrayVienas);
    document.write(`<br></br>`);

    // 2. f) Iš masyvo elementų sukurkite du naujus masyvus. Vienas turi būti sudarytas iš neporinių indeksų reikšmių, o kitas iš porinių;

    const summOne = [];
    const summTwo = [];

    for (let i = 0; i < arrayVienas.length; i++) {
          if( i % 2 === 0 ) {
            console.log(`Lyginiai: ${i}`)
            summOne.push(arrayVienas[i]);  
            
        } else {
            console.log(`Nelyginiai ${i} `)
            summTwo.push(arrayVienas[i]);
        }
    }

    
    document.write(`<br></br>`);

    //2. g) Pirminio masyvo elementus su poriniais indeksais padarykite lygius 0 jeigu jie didesni už 15;



    for (let i = 0; i < summOne.length; i++) {
        
            if (summOne[i] > 15) {
                 summOne.splice(i, 1 , 0);
            } 
        

    }
    console.log(`Pakeitimai Lyginis; ${summOne}`)
    document.write(`<br></br>`);

    //2. h) Suraskite pirmą indeksą, kurio elemento reikšmė didesnė už 10;
     
    let frstIndex = 0;

        for (let i = 0; i < arrayVienas.length; i++) {
            if (arrayVienas[i] > 10) {
                frstIndex = arrayVienas[i];
                break;
            }
        }
        console.log(`Index of first value above 10: ${frstIndex}`);
        document.write(`<br></br>`);

        //2. i) Iš masyvo ištrinkite visus elementus turinčius porinį indeksą;

        const array5 = [];


        for(let i = 1; i < arrayVienas.length; i += 2) {
            // console.log(i)
                if(i % 2 === 0){
                array5.push(arrayVienas[i]);
            }
            console.log(arrayVienas);
        }
        console.log(`${array5}`);
        document.write(`<br></br>`);

        //3. Sugeneruokite du masyvus, kurių reikšmės yra atsitiktiniai skaičiai nuo 100 iki 999. Masyvų ilgiai 100. Masyvų reikšmės turi būti unikalios savo masyve (t.y. neturi kartotis).

        const first_array =[];
        const second_array = [];

        for(let i = 0; first_array.length < 100; i++){
            let digt = rand(100, 999);
                // console.log(first_array.includes(digt));
            if(!first_array.includes(digt)) 
                first_array.push(digt);
            
        }

        console.log(first_array);

        for(let i = 0; second_array.length < 100; i++){
             digt = rand(100, 999);
                // console.log(first_array.includes(digt));
            if(!second_array.includes(digt)) 
                second_array.push(digt);
            
        }

        console.log(second_array);
    
    //4. Sugeneruokite masyvą, kuris būtų sudarytas iš reikšmių, kurios yra pirmame 3 uždavinio masyve, bet nėra antrame 3 uždavinio masyve.

    const three_array = [];

    for (let i = 0; i < first_array.length; i++) {
        if(!second_array.includes(first_array[i])) {
            three_array.push(first_array[i]);
        }

    }
    console.log(`Non dublicating: ${three_array}`);
  

    //5. Sugeneruokite masyvą iš elementų, kurie kartojasi abiejuose 3 uždavinio masyvuose.

    const naujas_masyvas = [];

        for (let i = 0; i < first_array.length; i++) {
    
            if (second_array.includes(first_array[i])) {
                naujas_masyvas.push(first_array[i]);
        }
        }
        console.log(`Dublicating: ${naujas_masyvas}`);

        document.write('<br/><br/>');

// 6. Sugeneruokite 10 skaičių masyvą pagal taisyklę: Du pirmi skaičiai- atsitiktiniai nuo 5 iki 25. Trečias, pirmo ir antro suma. Ketvirtas- antro ir trečio suma. Penktas trečio ir ketvirto suma ir t.t.

    const numbers10 = [rand(5, 25), rand(5, 25)];

    for (i = 2; i < 10; i++) {
         console.log(numbers10);
        
        numbers10[i] = numbers10[i - 2] + numbers10[i - 1];
         
           
    }
    console.log(numbers10);
    
    