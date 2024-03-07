const phrases = ['What is my IP', 'How many weeks in a year', 'How many ounces in a cup', 'How to screenshot on Mac'
, 'When is the Super Bowl', 'When is Easter', "When is Father's Day", 'What is Juneteenth', 'How do I register to vote', 'When is Thanksgiving']

const handleSearch = (e) => {
    e.preventDefault();
    const filter = document.querySelector('.test').value.toLowerCase();
    const text = document.querySelector('.result');
    text.innerHTML = '';
    let counter = 0;
    

    for (i = 0; i < phrases.length; i++) {
        if(phrases.includes(e.target.value)) {
             }

             

    let textValue = phrases[i].toLowerCase();

    if (textValue.includes(filter)) {
        const textDisplay = document.createElement('div');
        textDisplay.textContent = phrases[i];
        textDisplay.addEventListener("click", function (e) {
            
        document.querySelector('.test').value = this.textContent;
        text.innerHTML ='';
        
        })

        
        text.appendChild(textDisplay)
            counter++; 
             if (counter >= 5){
                 return;
             } 
             if (filter === "") {
                text.innerHTML = '';
            }
        } 
         
    }
      
}
