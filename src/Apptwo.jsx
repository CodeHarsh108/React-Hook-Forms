import './App.css';
import { useForm } from 'react-hook-form';

function Apptwo() {
    const {register, handleSubmit} = useForm();
    const onSubmit = (data) => console.log(data);
  return (
    <div>
      <h1>Forms in react</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Name :
          <input {...register('name')} />
        </label>
        <br />
        <br />
        <label>
          Email :
            <input type="email" {...register('email')}/>
        </label>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default Apptwo;