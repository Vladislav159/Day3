import { useState } from 'react';
import './App.css';
import Form from '../components/form/Form.jsx';

function App() {
  //Update formos sablonas
 const [data, setData]  = useState({
  name: '',
  topic: '',
  message: ''
 });

 const handleChange = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.name);
    setData({ ...data, [e.target.name] : e.target.value });
 }
 
 //CRUD;
 // Create
 // Read
 // UPdate
 // DElete


  return (
    <>
      <form>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Iveskite savo varda" name="name" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Iveskite savo varda" name="topic" onChange={handleChange}/>
        </div>
        <div className="mb-3">
          <textarea className ="form-control" placeholder="Iveskite zinute" name="message"
          onChange={handleChange}>

          </textarea>
        </div>
        <div>Vardas: {data.name}</div>
        <div>Tema: {data.topic}</div>
        <div> Zinute : {data.message}</div>
      </form>
      <Form />
    </>
  )
}

export default App
