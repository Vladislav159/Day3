import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react'

const NewUser = () => {
    // Peradresavimo (redirect) kūrimas
    const [message, setMessage] = useState();
    const navigate = useNavigate();

    //Vartotojo formos submitas
    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = {}

        for(const input of formData.entries()) {
        data[input[0]] = input[1]; 
    }

    axios.post('http://localhost:3000/users/register', data)
    .then (resp => {
    //   setMessage()
      navigate('/manager');
    })
    .catch(err => setMessage(err.response.data.message));
  }


    return (
        <>
            <h1>Naujas Vartotojas</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Vardas</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="user_name"
                    /> 
                </div>
                <div className="mb-3">
                    <label>Pavarde</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="last_name"
                    /> 
                </div>
                <div className="mb-3">
                    <label>Partijos pavadinimas</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="party"
                    /> 
                </div>
                <div className="mb-3">
                    <label>El pasto adresas</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        name="email"
                    /> 
                </div>
                <div className="mb-3">
                    <label>Slaptazodis</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        name="password"
                    /> 
                </div>
                    <div className="mb-3">
                    <label>Registracijos Data</label>
                    <input 
                        type="date" 
                        className="form-control" 
                        name="created_at"
                    /> 
                </div>
                <button className="btn btn-primary">Registruoti</button>
            </form>
        </>
    );
}

export default NewUser;