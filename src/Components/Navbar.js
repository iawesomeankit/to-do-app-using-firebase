import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../services/auth-config"
const Navbar = () => {
    const {user,logOut} = useUserAuth();
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
          await logOut();
          navigate("/");
        } catch (error) {
          console.log(error.message);
        }
      };
  return ( 
    <>
    {user?
    
<div className='nav' style={{display:"flex"}}>
        <div className='signout'>
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
        </div> 
    </div>
    :
   <div className='nav' style={{display:"flex"}}>
   <div className='login'>
       <Link to="/login">
       <Button variant="primary">
          login
        </Button>
       </Link>
   </div>
   <div className='signup'>
       <Link to="/signup">
       <Button variant="primary">
          signup
        </Button>
       </Link>
   </div>   
</div>}
    </>
  )
}

export default Navbar

