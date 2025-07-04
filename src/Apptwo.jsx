import React, { useEffect } from 'react';
import './App.css';
import { set, useForm } from 'react-hook-form';

function Apptwo() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const watchedName = watch('name');
  const watchedEmail = watch('email');



  useEffect(() => {
    if (watchedName !== undefined) {
      console.log('Name changed:', watchedName);
    }
  }, [watchedName]);

  useEffect(() => {
    if (watchedEmail !== undefined) {
      console.log('Email changed:', watchedEmail);
    }
  }, [watchedEmail]);

  const existUsernames = ['admin', 'user123', 'user2'];
  const checkIfUsernameExist = async (username) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return existUsernames.includes(username);
  };

  return (
    <div>
      <h1>Forms in React</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Name:
          <input
            {...register('name', {
              required: 'Name is required',
              validate: {
                notAdmin : (value) => value !== 'admin' || 'Name cannot be admin',
                checkUsername : async (value) => {
                  const exist = await checkIfUsernameExist(value);
                  return !exist || 'Username already exists';
                }
              }
            })}
          />
        </label>
        {errors.name && (
          <span style={{ color: 'red' }}>{errors.name.message}</span>
        )}
        <br />
        <br />
        <label>
          Email:
          <input
            type="email"
            {...register('email', { required: 'Email is required' })}
          />
        </label>
        {errors.email && (
          <span style={{ color: 'red' }}>{errors.email.message}</span>
        )}
        <br />
        <br />
        <button type="submit">Submit</button>
        <button type="button" onClick={() => reset()}>
          Reset
        </button>
      </form>
    </div>
  );
}

export default Apptwo;
