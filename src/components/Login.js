import React from "react";

const Login = () => {

  

  return(
    <div >
 <form>
    <div>
        <h2>Welcome back!</h2>
        <h2>Login into your account</h2>
    </div>
    <div>
       <label htmlFor='username' ></label>
       <input
          id="username"
          name="username"
          type="text"
          placeholder="EMAIL"
          // value={cred.username}
          // onChange={handleChange}
          />
       <label htmlFor='password' ></label>
       <input
          id="password"
          name="password"
          type="text"
          placeholder="PASSWORD"
          // value={cred.password}
          // onChange={handleChange}
          />
          {/* <Link to={'/forgot'} style={forgotStyle}>Forgot Password?</Link> */}
          <button type="submit">Sign In</button>
    </div>
 </form>
 </div>
  )
};

export default Login;