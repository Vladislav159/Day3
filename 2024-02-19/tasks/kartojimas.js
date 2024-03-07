const phrases = ['What is my IP', 'How many weeks in a year', 'How many ounces in a cup', 'How to screenshot on Mac'
, 'When is the Super Bowl', 'When is Easter', "When is Father's Day", 'What is Juneteenth', 'How do I register to vote', 'When is Thanksgiving'];

document.querySelector('input').addEventListener('keydown' ,(e) => {
    
    const text = e.target.value.toLowerCase();
    

const filteredPhrases = phrases.filter(sentence => sentence.toLowerCase().includes(text) )

const html = filteredPhrases.map(value =>` <li>${value}</li>`).join('');

document.querySelector(`.autocomplete`).innerHTML = html;
  
document.querySelectorAll(`li`).forEach(el => { el.addEventListener('click', (e) => {
    // console.log(e.target.textContent)
    document.querySelector('input').value = e.target.textContent;
    document.querySelector('.autocomplete').innerHTML = '';
        });
    });
})



