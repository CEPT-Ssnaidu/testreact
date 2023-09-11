import { Outlet, NavLink } from "react-router-dom";
import './NavbarStyle.css';

export default function Layouts(){


    return(
        <>
        <div className= "flex space-x-7 bg-gray-300 h-15 pb-4 pt-2 shadow-xs rounded-md  italic hover:not-italic text-justify">
        
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        </div>
        <hr></hr>
       

        <div className="min-h-[10vh]"></div>
        
        
    <Outlet/>
    
</>
    );
}