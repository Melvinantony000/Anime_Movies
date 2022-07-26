import React from "react";
import {Link} from 'react-router-dom'
 
const NavBar=()=>{
    
        
       return ( <div>  <div><nav className="navbar navbar-light   justify-content-between navbar-expand-lg" style={{background:" rgb(20, 15, 15)",height:"80px"}}>
        <a className="navbar-brand text-white pl-2" style={{fontSize:"40px" }}>Animation</a>
       <form className="form-inline">
       <ul className="navbar-nav">

        
        
         <li className="nav-item active">
         <Link className="nav-link text-white" style={{fontSize:"20px"}} to="/">Animation </Link>
         </li>
         <li className="nav-item active">
         <Link className="nav-link text-white" style={{fontSize:"20px"}} to="/Watchlist">Watchlist </Link>
         </li> 
             </ul>
         
       </form>
     </nav>
     </div>
      
       </div>
     
     )
     
    
    }

  
export  {NavBar};




