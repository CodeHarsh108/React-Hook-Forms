import React, { useEffect } from 'react';
import './App.css';
import { useForm } from 'react-hook-form';

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

  const validateName = (value) => {
    if (!value) return 'Name is required';
    if (value.length < 2) return 'Name must be at least 2 characters long';
    if (value !== 'admin') return 'Only admins can submit this form';
    return true;
  };

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

  return (
    <div>
      <h1>Forms in React</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Name:
          <input
            {...register('name', {
              validate: validateName
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
