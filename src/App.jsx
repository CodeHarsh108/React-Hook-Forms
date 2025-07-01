import './App.css';
import { useState } from 'react';


function App() {
  const [formData, setFormData] = useState({name: '', email: ''});
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
  };

  const handleChange = (e) => {
    setFormData(
      {...formData, [e.target.name]: e.target.value, } 
    );
  };

  return (
    <div>
      <h1>Forms in react</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name :
          <input type="text" name='name' value={formData.name} onChange={handleChange}/> 
        </label>
        <br />
        <label>
          Email :
          <input type="email" name='email' value={formData.email} onChange={handleChange}/> 
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App;
