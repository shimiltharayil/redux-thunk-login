import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Outlet, useNavigate } from "react-router-dom"

const Home = () => {
  const {userInfo}  = useSelector((state)=> state.user)
  const navigate = useNavigate()
  useEffect(() => {
  if(!userInfo){
    navigate("/login")
  }    
  
    
  }, [userInfo])
  
  return (
    <div>
        <h1>Hola</h1>
        <Outlet />
    </div>
  )
}
export default Home