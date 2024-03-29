import { useState, useContext, useEffect } from 'react';
import MainContext from '../../context/Main.jsx';
// import style from './NewPost.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NewPost = () => {
    const [message, setMessage] = useState();
    // const { setNewPost, user } = useContext(MainContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
      
        // formData.append('author', user._id);
        // formData.append('author', '660162e6e0718b8deff27297');
     
        axios.post('http://localhost:3000/posts/', formData)
        .then(resp => {
           
            // setNewPost(formData);
            navigate('/'); 
        })
        .catch(err => setMessage(err.message));
    };


    return (
        <div className="mb-3">
         
            <div className="mb-3">          
                 <h2>Sukurti Nauja Irasa</h2>
                <form onSubmit={handleSubmit}>
                    {message &&
                        <div className="alert alert-danger">{message}</div>
                    }
                   <div className="mb-3">
                    <label>Projekto pavadinimas</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="project_name"
                    /> 
                </div>
                <div className="mb-3">
                    <label>Nuotrauka</label>
                    <input 
                        type="file" 
                        className="form-control" 
                        name="photo"
                    /> 
                </div>
                <div className="mb-3">
                    <label>Projekto aprasymas</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="description"
                    /> 
                </div>
                <div className="mb-3">
                    <label>Talpinimo data ir laikas</label>
                    <input 
                        type="date" 
                        className="form-control" 
                        name="date"
                    /> 
                </div>
                <div className="mb-3">
                    <label>Norima svarstymo data</label>
                    <input 
                        type="date" 
                        className="form-control" 
                        name="resolution_date"
                    /> 
                 </div>
                 
                 {/* <div className="mb-3">
                    <label>Statusas</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="stat_name"                      
                    /> 
                 </div> */}
                

                    {/* author(id) ? */}
               
                
                <button className="btn btn-primary">Pridėti</button>
                </form>
            </div>
        </div>
    );
}

export default NewPost;