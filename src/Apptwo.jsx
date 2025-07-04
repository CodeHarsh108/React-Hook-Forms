import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './App.css';

function Apptwo() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid }
  } = useForm({
    mode: 'onChange'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const existUsernames = ['admin', 'user123', 'user2'];
  
  const checkIfUsernameExist = async (username) => {
    await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate API call
    return existUsernames.includes(username);
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real app, you would send data to your backend here
      console.log('Form submitted:', data);
      
      setSubmitSuccess(true);
      reset(); // Clear form after successful submission
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitError('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="form-container">
      <h1>User Registration</h1>
      
      {submitSuccess && (
        <div className="success-message">
          Registration successful! Thank you.
        </div>
      )}
      
      {submitError && (
        <div className="error-message">
          {submitError}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>
            Username:
            <input
              {...register('name', {
                required: 'Username is required',
                minLength: {
                  value: 3,
                  message: 'Username must be at least 3 characters'
                },
                validate: {
                  notAdmin: (value) => 
                    value.toLowerCase() !== 'admin' || 'Username cannot be "admin"',
                  isAvailable: async (value) => {
                    const exist = await checkIfUsernameExist(value);
                    return !exist || 'Username is already taken';
                  }
                }
              })}
              disabled={isSubmitting}
            />
          </label>
          {errors.name && (
            <span className="error">{errors.name.message}</span>
          )}
        </div>

        <div className="form-group">
          <label>
            Email:
            <input
              type="email"
              {...register('email', { 
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })}
              disabled={isSubmitting}
            />
          </label>
          {errors.email && (
            <span className="error">{errors.email.message}</span>
          )}
        </div>

        <div className="form-group">
          <label>
            Password:
            <input
              type="password"
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters'
                },
                validate: {
                  hasNumber: (value) => 
                    /\d/.test(value) || 'Password must contain a number',
                  hasSpecialChar: (value) =>
                    /[!@#$%^&*]/.test(value) || 'Password must contain a special character'
                }
              })}
              disabled={isSubmitting}
            />
          </label>
          {errors.password && (
            <span className="error">{errors.password.message}</span>
          )}
        </div>

        <div className="form-group">
          <label>
            Confirm Password:
            <input
              type="password"
              {...register('confirmPassword', {
                required: 'Please confirm your password',
                validate: (value) =>
                  value === watch('password') || 'Passwords do not match'
              })}
              disabled={isSubmitting}
            />
          </label>
          {errors.confirmPassword && (
            <span className="error">{errors.confirmPassword.message}</span>
          )}
        </div>

        <div className="form-actions">
          <button 
            type="submit" 
            disabled={isSubmitting || !isValid}
            className={isSubmitting ? 'submitting' : ''}
          >
            {isSubmitting ? 'Submitting...' : 'Register'}
          </button>
          
          <button 
            type="button" 
            onClick={() => {
              reset();
              setSubmitSuccess(false);
              setSubmitError(null);
            }}
            disabled={isSubmitting}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default Apptwo;