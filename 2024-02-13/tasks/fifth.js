// //Fono Spalva:
// Sukurkite tris mygtukus su tekstais: "Blue", "Red", "White"
// Paspaudus ant kiekvieno mygtuko pakeiskite puslapio fono spalvą atitinkamomis spalvomis.

document.querySelector('#white').addEventListener('click', function onClick() {
    // 👇 change background color
    document.body.style.backgroundColor = 'white';
})
document.querySelector('#red').addEventListener('click', function onClick() {
    // 👇 change background color
    document.body.style.backgroundColor = 'red';
})
document.querySelector('#blue').addEventListener('click', function onClick() {
    // 👇 change background color
    document.body.style.backgroundColor = 'blue';
})