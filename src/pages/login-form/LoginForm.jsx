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
      </form>
    </div>
  );
}

export default LoginForm;
