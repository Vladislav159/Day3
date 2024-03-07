import { useState } from 'react';

const Button = () => {
    const [count, setCount] = useState(0);

    // console.log(`Button komponentas uzdetas`)

    const handleClick = (e) => {
        // Naujos count reiksmes priskyrimas
        //Pirmas budas
        setCount(count + 1);
        //Antras budas
        // setCount (priesTaibuvusicoountreiksme => priesTaibuvusicoountreiksme + 1 );
        // setCount (prev => prev + 1);
      };

    return ( 
        <>
            <h2>Mygtuko paspaudimas</h2>

            <   div>Rezultatas: {count}</div>
            <button onClick={handleClick}>Paspausk mane</button>

        </>
    )
}
export default Button;