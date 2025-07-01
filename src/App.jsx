import './App.css';
import { useState } from 'react';


function App() {
  const [formData, setFormData] = useState({name: '', email: ''});
  const [errors, setErrors] = useState({});
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    return newErrors;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    }else{
      console.log("Form submitted with data:", formData);
    }
    
  };

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(
      {...formData, [e.target.name]: e.target.value, } 
    );
    if(errors[name]){
      const newErrors = {...errors};
      delete newErrors[name];
      setErrors(newErrors);
    }
  };

  return (
    <div>
      <h1>Forms in react</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name :
          <input type="text" name='name' value={formData.name} onChange={handleChange}/> 
          {errors.name && <span className="error">{errors.name}</span>}
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
