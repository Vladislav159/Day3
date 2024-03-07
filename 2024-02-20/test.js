const phrases = ['What is my IP', 'How many weeks in a year', 'How many ounces in a cup', 'How to screenshot on Mac'
    , 'When is the Super Bowl', 'When is Easter', "When is Father's Day", 'What is Juneteenth', 'How do I register to vote', 'When is Thanksgiving']

const onclickFind = (e) => {
    const enterTxt = document.querySelector(`input`).value;
    const filteredTxt = phrases.filter(onePhras => onePhras.toLowerCase().includes(enterTxt.toLowerCase()) );
    console.log(filteredTxt);
    
}