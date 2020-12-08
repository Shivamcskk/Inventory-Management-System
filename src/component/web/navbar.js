import React, { useState } from 'react';
import { Button } from './button'
import { Link } from 'react-router-dom';
import './navbar.css';
import Dropdown from './dropdown';
import Auth from '../../value'
import Axios from "axios";

function Navbar() {

  
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
 

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  const sendDetail=async(e)=>{
  const ress =await Axios.get("http://localhost:3001/api/logout");
  Auth.signout();
  console.log(ress);
 
  }
  return (
    <>
      <nav className='navbar'>
        <Link to='/home' className='navbar-logo' onClick={closeMobileMenu}>
          Home
          <i class='fab fa-firstdraft' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'> 
            <Link to='/login' className='nav-links'  onClick={sendDetail}>
              Logout
             
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/categories'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              category <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link
              to='/products'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Products
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to='/order'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Order
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;