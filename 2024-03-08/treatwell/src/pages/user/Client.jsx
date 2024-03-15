 import { useState, useEffect } from 'react';

const Client = () => {
     const [data, setData] = useState([]);

//     const subMit = (e) => {
//        e.preventDefault();

//        // Formos duomenų paėmimo pradžia
//          const formData = new FormData(e.target);
//          const data = {};

//          for(const input of formData.entries()) {
//             data[input[0]] = input[1];
//         }
// }

     useEffect(() => {
         const localData = JSON.parse(localStorage.getItem('data'));

         if(localData)
             setData(localData);
     }, []);

    

    return (
        <>
            <h1>Barber clients</h1>
            <div className="row mt-5"   >
                {data.map((barber, index) =>
                <div className="info col-3" key={index}>
                    <div className ="image px-5">
                        <img src={barber.photo} style={{maxWidth: '100%'}} />
                    </div>
                    <div>
                       <p>{barber.names}</p>
                       <p>{barber.phone}</p>
                    
                    </div>
                    {/* <button  className="btn btn-primary" onClick={subMit}>Review</button> */}
                </div>
                )}
            </div>
        </>
    );
}

export default Client;