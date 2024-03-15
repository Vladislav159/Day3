 import { useState, useEffect } from 'react';

const Barberinfo = () => {
    const [data, setData] = useState([]);

// const navigate = useNavigate();
// //  Reikšmės patalpintos url adrese paėmimas 
//  const { indentifikatorius } = useParams();

  useEffect(() => {
// //      Duomenų iš localStorage paėmimas
    const locData = JSON.parse(localStorage.getItem('data'));

//      Patikrinimas ar jie buvo priskirti
     if(!locData)
          return;

 //   Duomenų priskyrimas prie state'o, tam, kad formoje matytume anksčiau buvusias reikšmes
//     setForm(localData[indentifikatorius]);
 }, []);

// // Formos duomenų įrašymas
 const onSubm = (e) => {
      e.preventDefault();

// //      Formos duomenų paėmimo pradžia
     const formData = new FormData(e.target);
     const data = {};

      for(const input of formData.entries()) {
          data[input[0]] = input[1];
     }

// //     // Formos duomenų paėmimo pabaiga

// //     // 1. Paimame duomenis iš localStorage
// //     // 2. Konvertuojam duomenis
// //     // 3. Redaguojame duomenis
// //     // 4. Konvertuojame duomenis iš naujos
// //     // 5. Išsaugojame duomenis
//      const localData = JSON.parse(localStorage.getItem('data'));
//      localData[indentifikatorius] = data;
//     localStorage.setItem('data', JSON.stringify(localData));

// //     // Peradresavimo iniciavimas
//      navigate('/Barberinfo');
  }

return (
    <>
            <div>
                <tbody>
                
                    {data.map((barber, index) => 
                        <tr key={index}>
                            <td>{index}</td>
                            <td>
                                <img src={barber.photo} style={{ maxWidth: 50 }} />
                            </td>
                            <td>{barber.names}</td>
                            <td>{barber.phone}</td>
                            <td>{barber.email}</td>
                            <td>{barber.price}</td>
                            <td>{barber.eval}</td>
                            <td>{barber.description}</td>
                        </tr>
                    )}
                </tbody> 
            </div>
    </>
)
 
}
export default Barberinfo;
               
