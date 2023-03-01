

import { useRef } from "react";
import { Link, Outlet } from "react-router-dom";

const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    console.log(user);
  };
  return (
    <div>
      <form>
        <div>
          <label> Email</label>
          <input ref={emailRef} type="email" placeholder="Email Address" />
        </div>
        <div>
          <label> Password </label>
          <input ref={passwordRef} type="password" placeholder="Password" />
        </div>
      
        <button onClick={handleSubmit} type="submit">
          Login
        </button>
      </form>
      <Outlet />
      <Link to="/register">
      <p>Not registered ?</p>
      </Link>
    </div>
  );
};
export default Login;