import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const User = ({ data }) => {
    // const [data, setData] = useState([]);
    // const [message, setMessage] = useState('')

    // useEffect(() => {
    //     axios.get('http://localhost:3000/users/')
    //     .then(resp => setData(resp.data))
    //     .catch(error => {
    //         setMessage('Įvyko klaida gaunant duomenis.');
                    // navigate('/manager');
    //     });
    // }, []);

   
    // const handleDelete = (id) => {
        
    //     fetch('http://localhost:3000/users/' + id, {
    //         method: 'DELETE' 
    //     })
    //     .then(resp => resp.text())
    // .then(resp => {
    //         console.log(resp)
    //         setLoader(!loader);
    // }   );
      
    // };

    return (
        <>  
            
                 
                        <tr key={data._id}>
                          
                            <td>{data.user_name}</td>
                            <td>{data.last_name}</td>
                            <td>{data.party}</td>
                            <td>{data.email}</td>
                            <td>{data.password}</td>
                            <td>{data.created_at}</td>
                            <td>
                                  {/* <button 
                                    className="btn btn-danger"
                                    onClick={() => handleDelete(item._id)}
                                >
                                    Ištrinti
                                </button>  */}
                                {/* <Link 
                                    to={'/users/register/' }
                                    className="btn btn-warning"
                                >
                                    Redaguoti
                                </Link>  */}
                            </td>
                        </tr>
                    
               
        </>
    );
}

export default User;