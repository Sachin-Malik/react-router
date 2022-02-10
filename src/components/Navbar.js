import React from 'react';
import {NavLink} from 'react-router-dom'

function Navbar() {

  const navLinkStyle = ({isActive})=>{
    return {
        fontWeight:isActive? 'bold':'normal',
        textDecoration: isActive ? 'none' : 'underline',
    }
  }
  return (
  <nav className='primary'>
    <NavLink style={navLinkStyle} to='/'>Home</NavLink>
    <NavLink style={navLinkStyle} to='/about'>About</NavLink>
    <NavLink style={navLinkStyle} to='/products'>Products</NavLink>     
  </nav>
  );
}

export default Navbar;
