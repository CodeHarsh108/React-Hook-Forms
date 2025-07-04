import { use, useEffect } from 'react';
import './App.css';
import { useForm } from 'react-hook-form';

function Apptwo() {
    const {register, handleSubmit, reset, watch, formState: {errors}} = useForm();
    const onSubmit = (data) =>{ console.log(data);}
    const watchedName = watch('name');
    const watchedEmail = watch('email');

    useEffect(() => {
    console.log('Name changed:', watchedName);
    },[watchedName]);

    useEffect(() => {
    console.log('Email changed:', watchedEmail);}, [watchedEmail]);

  return (
    <div>
      <h1>Forms in react</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Name :
          <input {...register('name', {required: true, minLength:2})} />
        </label>
        {errors.name && <span>Name is required and minimum 2 characters long</span>}
        <br />
        <br />
        <label>
          Email :
            <input type="email" {...register('email', {required: true})}/>
        </label>
        {errors.email && <span>Email is required</span>}
        <br />
        <br />
        <button type="submit">Submit</button>
        <button type="button" onClick={() => reset()}>Reset</button>
      </form>
    </div>
  );
}
export default Apptwo;