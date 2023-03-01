import { useRef } from "react";
import { Link, Outlet } from "react-router-dom";

const Register = () => {
      const emailRef = useRef(null)
      const passwordRef = useRef(null)
      const confirmPasswordRef = useRef(null)

    const handleSubmit = (e) =>{
      e.preventDefault()
      const user = {
        email: emailRef.current.value,
        password: passwordRef.current.value,
        confirmPassword: confirmPasswordRef.current.value
      }
      console.log(user)

    }
  return (
    <>
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
        <div>
          <label>Confirm Password</label>
          <input ref={confirmPasswordRef} type="password" placeholder="Password" />
        </div>
        <button onClick={handleSubmit} type="submit">Register</button>
      </form>
    </div>
      <Outlet />
      <Link to="/login">
      <p>Already have a account</p>
      </Link>
    </>
  );
}
export default Register