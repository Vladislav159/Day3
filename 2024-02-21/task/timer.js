let seconds = 600;
let timer;
let button = document.querySelector(`.start`);
const minutes = document.querySelector(`.minutes`).textContent = Math.floor(seconds / 60);
const secondss =  document.querySelector(`.secondss`).textContent = seconds % 60;

const start = (e) => {

    if (seconds === 0) {

        return;
    }

     
    // console.log(button.textContent)

    if (button.textContent === `Start`) {
        // Pradedam skaiciavima
        // Mygtuko teksto pakeitimas
        button.textContent = `Stop`;
        timer = setInterval(() => {
            // console.log(timer)
            seconds--;
            document.querySelector(`.minutes`).textContent = Math.floor(seconds / 60);
            document.querySelector(`.secondss`).textContent = seconds % 60;


            if (seconds === 0) {
                clearInterval(timer);
                return;
            }


        }, 1000);
    } else {
        //Stabdom skaiciavima
        button.textContent = `Start`;
        clearInterval(timer);

    }


}

const reset = (e) => {
    seconds = 600;
    button.textContent = `Start`;
    clearInterval(timer);
    document.querySelector(`.minutes`).textContent = Math.floor(seconds / 60);
    document.querySelector(`.secondss`).textContent = seconds % 60;
}










let sekonds = 0;
let chronometr;
let minuten = 0;

let sbutton = document.querySelector(`.startb`);

  const sec = document.querySelector(`.sec`).textContent = Math.floor(sekonds / 100);
  const millisec =  document.querySelector(`.millisec`).textContent = sekonds % 100;

const startb = (e) => {

    //   if (sekonds === 0) {

    //       return;
    //  }
    
     
    // console.log(button.textContent)

    if (sbutton.textContent === `Start`) {
        // Pradedam skaiciavima
        // Mygtuko teksto pakeitimas
        sbutton.textContent = `Stop`;

        chronometr = setInterval(() => {
            // console.log(chronometr)
          
            sekonds++;

            document.querySelector(`.sec`).textContent = Math.floor(sekonds / 100 );

            document.querySelector(`.millisec`).textContent = sekonds % 100;
            
            if (sekonds === 0) {
                clearInterval(chronometr);
                return;
            }
            


        }, 10);
    } else {
        //Stabdom skaiciavima
        sbutton.textContent = `Start`;
        clearInterval(chronometr);

    }


}

const resetb = (e) => {
    sekonds = 0;
    sbutton.textContent = `Start`;
    clearInterval(chronometr);
    document.querySelector(`.sec`).textContent = sekonds;
    document.querySelector(`.millisec`).textContent = sekonds;
}