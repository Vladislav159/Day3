const phrases = ['What is my IP', 'How many weeks in a year', 'How many ounces in a cup', 'How to screenshot on Mac'
    , 'When is the Super Bowl', 'When is Easter', "When is Father's Day", 'What is Juneteenth', 'How do I register to vote', 'When is Thanksgiving']

// const array = [];
// for(let i = 0; i < phrases.length; i++) {
//     console.log(phrases.length)

//     if(phrases[i].toLowerCase().includes(enteredText.toLowerCase()) ) {
//         array.push(phrases[i]);
//         console.log(array)
//     }
// }

// const searchField = document.querySelector('input')


//  function searchField  (e) {}
const onclickSearch = (e) => {
    const enteredText = document.querySelector('input').value;
    //   console.log(enteredText);
    const filteredPhrase = phrases.filter(onePhrase => onePhrase.toLowerCase().includes(enteredText.toLowerCase()));
    console.log(filteredPhrase);

    const shortlist = filteredPhrase.slice(0, 5);

    let markup = "";

    shortlist.forEach((onePhrase) => markup += (`<li>${onePhrase}</li>`));
    //  <li>Hello</li>
    console.log(markup)

    document.querySelector(`.autocomplete`).innerHTML = markup;
    console.log(document.querySelectorAll(`li`))

    // document.querySelectorAll(`li`).addEventListener('click' , choose )

    document.querySelectorAll(`li`).forEach((li) => li.addEventListener(`click`, choose))

    function choose(e) {
        // console.log(e.target.textContent)
        // e.target.textContent- kelias iki LI frazes elemento;
        document.querySelector(`input`).value = e.target.textContent;
     
        document.querySelector(`.autocomplete`).innerHTML = '';
    }
}