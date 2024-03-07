// Sukurkite mygtuką: "Ridenti kamuoliuką" ant kurio paspaudus būtų generuojamas atsitiktinis skaičius nuo 0 iki 100. 
// Skaičius atvaizduokite eilėje ir stilizuokite juos kaip kamuoliukus. 
// Kiekvieną kartą paspaudus ant mygtuko "išridenamas kamuoliukas".
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}




document.querySelector('#lotto').onclick = (number) => {
        let luckyNumber = rand(0, 99);
        const skaicius = rand(0, 100);
    
        if(skaicius <= 19)  {
            document.querySelector('.kamuoliukai').innerHTML += `<div style="background-color:black; color:white" class="kamuoliukas">
            ${skaicius}</div>`
            
        }
        
         else if (skaicius > 20 && skaicius <= 39)  {
        document.querySelector('.kamuoliukai').innerHTML += `<div style="background-color:yellow;" class="kamuoliukas">
        ${skaicius}</div>`
        } else if (skaicius >= 40 && skaicius <= 59)  {
            document.querySelector('.kamuoliukai').innerHTML += `<div style="background-color:red;" class="kamuoliukas">
            ${skaicius}</div>`
            }
            else if (skaicius >= 60 && skaicius <= 79){
                document.querySelector('.kamuoliukai').innerHTML += `<div style="background-color:blue;" class="kamuoliukas">
                ${skaicius}</div>`
            } else {
                document.querySelector('.kamuoliukai').innerHTML += `<div style="background-color:green;" class="kamuoliukas">
                ${skaicius}</div>`
            } 
            if(skaicius === luckyNumber) {
                return  alert("Skambutis!")
            }
                
    }


    // Teleloto (trečia dalis):
// 6.Iškritus laimingam kamuoliukui atvaizduokite tekstą "SKAMBUTIS!" ir nebeleiskite (break padaryti) ridenti kamuoliukų. 

// Laimingo kamuoliuko numerį nustatykite vieną kartą žaidimo pradžioje kaip atsitiktinį skaičių.
// Su rand funkcija





    


