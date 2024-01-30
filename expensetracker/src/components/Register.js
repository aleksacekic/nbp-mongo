import React from "react";

const Register = () => {
  return (
    <div className="bodyloginregister">
      <div className="login-page">
        <div className="form">
          <div className="login">
            <div className="login-header">
              <h3>REGISTER</h3>
              <p>Enter your information to create an account.</p>
            </div>
          </div>
          <form className="login-form">
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <button>register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
