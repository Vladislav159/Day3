import { useState, useEffect } from 'react';

const Generator = () => {
    const [password, setPassword] = useState('');
    const [genpass, setGenpass] = useState([]);

 useEffect(() => {
     let pass = localStorage.getItem('passwords');

     if(!pass) 
        return;
    

        pass = JSON.parse(pass);
        setGenpass(pass);
        
    
 },[]);

    const handleSubmit = (e) => {
        e.preventDefault();
        //Formos duomenu paemimas ir priskyrimas data objektui
        const form = new FormData(e.target);
        const data = {};

        for (const input of form.entries()) {
            data[input[0]] = input[1];
        }

        console.log(data);

        function rand(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        //Reiksmiu deklaravimas
        let letters = 'abcdefghijklmnopqrstuvwxyz';
        const symbol = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';
        const finalPas = [];
        //Jeigu input laukelis numbers pazymetas,tuomet prie stringo pridedam skaicius
        for (let x = 0; x < data.length; x++) {
            const temp = [];
            if (data.numbers === 'on') {
                temp.push(rand(0, 9));
            }
            if (data.symbols === 'on') {
                temp.push(symbol[rand(0, 28)]);
            }
            if (rand(0, 1) === 0) temp.push(letters[rand(0, 25)]);
            else temp.push(letters[rand(0, 25)].toUpperCase());

            let charachter = temp[rand(0, temp.length - 1)];
            finalPas.push(charachter)

        }
        console.log(finalPas);
        //Galutini stringa priskiriam prie state 
        setPassword(finalPas.join(''));

        const localData = localStorage.getItem('passwords');

        if(localData) {
            //Papildymas 
            //Veiksmu seka:
            //1.Konvertuojame stringa is JSON formato
            //2.Papildome masyva
            //3. Konvertuojame masyva atgal i JSON stringa
            //4.Issaugom stringa localStorage
            let convertedData = JSON.parse(localData);

            //  if(finalPas.length === 10){
            //     finalPas.splice(9, 1);
            // }
            
            convertedData.unshift(finalPas.join(''));
            convertedData = JSON.stringify(convertedData);
            localStorage.setItem('passwords', convertedData);
        } else {
            //Pirma karta paleista aplikacija
            localStorage.setItem('passwords', JSON.stringify([finalPas.join('')]));
        }   
       

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="container">
                    <div className="pasGen mb-3">
                        <p>Generated password</p>
                        <input type="text"
                            className="form-control pass"
                            name="passwordgen"
                            value={password}
                            readOnly={true}

                        />
                    </div>
                <div className="secondBlock">    
                    <div className="inlinebloc">
                        <div className="pasLength mb-3">
                            <p>Length</p>
                            <input type="number"
                                className="form-control numero"
                                name="length"
                            />
                        </div>
                        <div className="numbSymbol mb-3">
                            <div className="pasLength du">
                                <p>Numbers</p>
                                <input type="checkbox"
                                    className="form-check-input"
                                    name="numbers" />
                            </div>
                            <div className="pasLength du">
                                <p>Symbols</p>
                                <input type="checkbox"
                                    className="form-check-input"
                                    name="symbols" />
                            </div>
                        </div>
                    </div>
                    <div className="generate mb-3">
                        <button className="btn btn-primary">Generate </button>
                    </div>
                </div>
                </div>

            </form>
             {genpass.map(pass => <div>{pass}</div> )}
             
        </>
    )

}

export default Generator;

