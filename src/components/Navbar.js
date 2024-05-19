import React, { useEffect } from 'react'
import {
  Link,
  useLocation
} from "react-router-dom";
import { useNavigate } from 'react-router-dom';


export default function Navbar() {
  let history=useNavigate();
  
const handleLogout=()=>{
  localStorage.removeItem('token');
  history("/")
}
  let location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  }, [location]);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid" >
          <Link className="navbar-brand" to="/">Blog</Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{display:'flex',justifyContent:'flex-end'}}> 
            {
            !localStorage.getItem('token')?<form className="d-flex" >
              <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
              <Link className="btn btn-primary mx-1" to="/signup" role="button">Signup</Link>
            </form>:<button onClick={handleLogout}  className="btn btn-primary mx-1">Logout</button>
            }
          </div>
        </div>
      </nav>
    </div>
  )
}
