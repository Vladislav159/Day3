//Sukurkite žaidimą.
// Žaidimą žaidžia du žaidėjai: Player(Jūs) ir Kompiuteris. 
// Žaidimą sudaro 10 raundų, vieno raundo trukmė 30 sekundžių. 
// Raundą laimi tas žaidėjas kuris surenka daugiau taškų.
// Kiekvieno raundo pabaigoje atvaizduokite laimėtojo vardą, surinktus taškus raunde ir visus laimėtus roundus prie žaidėjų vardų.


// Žaidimo esmė:
// Puslapyje atvaizduojamas kvadratas(50px x 50px) kuris keičia savo atsitiktinę poziciją bei savo fono spalvą kas 1 sekundę. 
// Jeigu žaidėjas spėja per šį laiko tarpą paspausti ant kvadrato - taškas skiriamas jam. Priešingu atveju laimi kompiuteris.
// Kiekviename rounde naršyklėje atvaizduokite laikmatį skaičiuojantį roundo trukmę. 
// Pasibaigus žaidimui atvaizduokite laimėtojo vardą bei mygtuką, ant kurio paspaudus žaidimas būtų pradedamas iš naujo.


function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

        
const game = document.querySelector(`.game`);
        let posTop = 0;
        let posLeft = 0;
        let time = 0;
        let playerScore = 0;
        let round = 0;
        let limit = 10;
         let playerWins = 0;
         let computerWins = 0;
        
       
    

document.querySelector(`.game`).addEventListener("click", (event) => {
    
    playerScore++;
  
    });

    function getRandom(min, max){
      return Math.ceil(Math.random() * (max - min) + min);
    }
  
  

       let intervaloId = setInterval(() => {
            
        
            if( time === limit  ){
                  time = 0 ;
                           
                  round++;
                  
                  let computerScore = limit - playerScore;
                  let computerRoundWins = 0;
                     let playerRoundWins = 0;


                  if (playerScore > computerScore) {
                       
                      document.querySelector(
                          ".result"
                        ).innerHTML += `<div><b>${round} Roundą laimėjo :</b> zaidejas surinkęs ${playerScore} taškų(-us)</div>`;
                        playerWins++;
                        playerRoundWins = round;
      
                  } else if (computerScore > playerScore) {
               
                     document.querySelector(
                      ".result"
                    ).innerHTML += `<div><b>${round} Roundą laimėjo:</b> kompiuteris surinkęs ${computerScore} taškų(-us)</div>`;
                    computerWins++;
                    computerRoundWins = round;
                      
                  } else {
                    document.querySelector(
                      ".result"
                    ).innerHTML +=`<div> "lygiosios"</div>`;
                  }
                          
                  playerScore = 0;

                 
                  if (round === 3) {
                    clearInterval(intervaloId);

                   
                    if (computerScore > playerScore) {
                      gameWinner = 'Kompiuteris';
                      
                                            
                    } else if (computerScore < playerScore) {
                      gameWinner = 'Žaidėjas';
                     
                         
                    } else {
                      document.querySelector('.mainb').innerHTML =
                          `<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 300px">
                              <h1>Žaidimas baigėsi lygiosiomis</h1>
                              <button class="reset" onClick="window.location.reload()">Bandykite dar kartą</button>
                          </div>`;
                    }
                    document.querySelector('.mainb').innerHTML =
                      `<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 300px">
                          <h1>Žaidimą laimėjo ${gameWinner}: laimėjęs ${round} round(-us)</h1>
                          <button class="reset" onClick="window.location.reload()">Bandykite dar kartą</button>
                      </div>`;
                    

                  }    
                    
                 
                 
                  
                }
                  posTop = rand(50,550);
                  posLeft = rand(50,550);
                  game.style.top = `${posTop}px`;
                  game.style.left = `${posLeft}px`;
                  game.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)},${getRandom(0, 255)})`;
              
          

                  time++;

                  document.querySelector(
                    ".timer"
                    ).innerHTML = time;
               
                  }, 1000);

                  // if (playerWins > computerWins) {
                    // gameWinner = 'Žaidėjas';
                    // } else if (computerWins > playerWins) {
                    // gameWinner = 'Kompiuteris';
                    // }
                  
                //    if (gameWinner === 'Kompiuteris') {
                //      computerWins = round; 
                //  } else if (gameWinner === 'Žaidėjas') {
                //      playerWins = round
                //  }
    
    
      
    