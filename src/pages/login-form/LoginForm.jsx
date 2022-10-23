import React from "react";

function LoginForm() {
  return (
    <div className="container my-5">
      <form>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
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
          />
        </div>
        <div className="mb-3">
          <label htmlFor="conform-password" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            id="conform-password"
            name="conform-password"
            className="form-control"
          />
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
