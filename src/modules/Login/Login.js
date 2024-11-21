import React from 'react';
 

const Login = () => (
  <div className="app-container">
    <div className="login">
      <h3>Login</h3>
      <form>
        <label>
          <span>Your email:</span>
          <input type="email" name="email" required />
        </label>
        <label>
          <span>Your Password:</span>
          <input type="password" name="email" required />
        </label>
        <button>Submit</button>
      </form>
    </div>
  </div>
);

export default Login;
