import React, { useState } from "react";
import validator from 'validator';
function LoginForm() {

  const [signupInput, setSignupInput] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState('');


  const handleChange = (e) => {
    setSignupInput({
      ...signupInput,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validator.isEmail(signupInput.email)) {
      setError('The email you input is invalid')
    } else if(signupInput.password.length < 5){
      setError('The password you entre should contain 5 or more characters')
    }
    else if(signupInput.password !== signupInput.confirmPassword){
      setError('The passwords do not match. try again')
    }

  }
  return (
    <div className="container my-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={signupInput.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            value={signupInput.password}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="conform-password" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            id="conform-password"
            name="confirmPassword"
            className="form-control"
            value={signupInput.confirmPassword}
            onChange={handleChange}
          />
        </div>
        {
          error && <p className="text-danger">{error}</p>
        }
        <button type="submit" className="btn btn-primary">
          submit
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
