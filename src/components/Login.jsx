

import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/action/userAction";

const Login = () => {
  const navigate = useNavigate();

  const [email,setEmail] = useState("")
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()
  const {loading,error,userInfo} = useSelector((state)=>state.user)

    useEffect(() => {
      if (userInfo) {
        navigate("/");
      }
    }, [navigate, userInfo]);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password))
      
  };
  return (
    <div>
      <form>
        <div>
          <label> Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email Address"
          />
        </div>
        <div>
          <label> Password </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
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