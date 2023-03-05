import { useEffect, useRef, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/action/userAction";
import Loader from "./Loader";

const Register = () => {
  const [message, setMessage] = useState("");
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const {loading,error,userInfo} = useSelector((state) => state.user)

    useEffect(()=>{
       if(userInfo){
        navigate("/")
       }
    },[navigate,userInfo])
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
      confirmPassword: confirmPasswordRef.current.value,
    };
   
  if (user.password !== user.confirmPassword) {
    setMessage("Password does not match");
    setTimeout(() => setMessage(""), 300);
    //  navigate("/");
  }else{
    dispatch(register(user.email, user.password));
  }
  };
  return (
    <>
      <div>
        <form>
          <div>
            <h1>{message}</h1>
            <label> Email</label>
            <input ref={emailRef} type="email" placeholder="Email Address" />
          </div>
          <div>
            <label> Password </label>
            <input ref={passwordRef} type="password" placeholder="Password" />
          </div>
          <div>
            <label>Confirm Password</label>
            <input
              ref={confirmPasswordRef}
              type="password"
              placeholder="Password"
            />
          </div>
          <button onClick={handleSubmit} type="submit">
            Register
          </button>
        </form>
      </div>
      <Outlet />
      <Link to="/login">
        <p>Already have a account</p>
      </Link>
      <div>
       <Loader />
      </div>
    </>
  );
};
export default Register;
