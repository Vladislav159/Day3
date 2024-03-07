// document.querySelector('div.container').innerHTML += '<h1>Hello World</h1>';

//         const words = ['Titulinis', 'Apie Mus', 'Kontaktai', 'Istorija', 'Nuorodos'];
        
//         let html = '<ul class="special">';
        
//         words.forEach(value => html += `<li>${value}</li>`);
        
//         html += '</ul>';

//         console.log(html);

//         document.querySelector('div.container').innerHTML += html;
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Atlikite tris konstravimo etapus:


// 1. Aprašykite skaičių blokus su statinėmis reikšmėmis, tačiau patalpinamus javascript kodo pagalba.


// 2. Skaičius imkite iš 16 elementų masyvo. Kiekvienas masyvo elementas yra žaidime esantis blokelis.


// 3.  Masyve generuokite atsitiktinius eksponentinius skaičius nuo 0 iki 64. Jeigu skaičius 0, blokelį palikite tuščią. Visus kitus nuspalvinkite ryškėjančiomis spalvomis. 

//4. Sukurkite mygtuką "Naujas žaidimas" kuriam registruokite "click" įvykį. Paspaudus ant mygtuko skaičius masyve generuokite iš naujo ir juos atvaizduokite naršyklėje.

function handleClick() {
const box = document.querySelector('.box');

const array = [];
const array2 = [0, 2, 4, 8, 16, 32, 64];
box.innerHTML = "";

    for(let i = 0; i < 16; i++) {
     
        let number = array2[rand(0, 6)];
        
        array.push(number);
      
        if(array[i] === 0)  {
            
            box.innerHTML += `<div style="background-color:#cdc1b4; ">&nbsp</div>`
            
        } else if (array[i] === 2) {
  
            box.innerHTML += `<div style="background-color:#eee4da; color:#766e66;">${array[i]}</div>`;
        } else if(array[i] === 4)  {
         
            box.innerHTML += `<div style="background-color:#eee1c8; color:#766e66;">${array[i]}</div>`;
        } else if (array[i] === 8) {

            box.innerHTML += `<div style="background-color:#f2b27a; color:#f9f6f2">${array[i]}</div>`;
        }  else if (array[i] === 16) {

            box.innerHTML += `<div style="background-color:blue; color:#f9f6f2 ">${array[i]}</div>`;
        }
        else if (array[i] === 32) {

            box.innerHTML += `<div style="background-color:red; color:#f9f6f2">${array[i]}</div>`;
        } 
        else if (array[i] === 64) {

            box.innerHTML += `<div style="background-color:pink; color:#f9f6f2;">${array[i]}</div>`;
        } else {
            
            box.innerHTML += `<div style="background-color:#f69664; color:#f9f6f2;">${array[i] } </div>`;
        }
    }
}
document.querySelector("button").addEventListener("click", handleClick);
handleClick();

// const array = [0, 0, 2, 4, 0, 0, 2, 4, 0, 0, 2, 8, 0, 4, 8, 16];

//  array.forEach((array, index) => {
//      console.log(` ${index + 1}: ${array}`);
//  });
// function handleClick() {
//         console.log('Paspaudimas registruotas');
//  }

//     document.querySelector('button').addEventListener('click', handleClick);