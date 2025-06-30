import './App.css';


function App() {
  const handleSubmit = () => {

  };

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <h1>Forms in react</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name :
          <input type="text" name='name'  onChange={handleChange}/> 
        </label>
      </form>
    </div>
  )
}

export default App
