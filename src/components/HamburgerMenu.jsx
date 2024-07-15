import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';


const HamburgerMenu = () => {
  const [show, setShow] = useState(false);
  const toggleDropdown = () => setShow(!show);

  return (
    <div className='custom-md:hidden pr-6'>
      <a id='dropdown-menu' 
        className="nav-link" 
        href='#'
        data-bs-toggle="dropdown"
        aria-expanded={show}
        onClick={toggleDropdown}
        >
        <FontAwesomeIcon className='text-white' icon={faBars}></FontAwesomeIcon></a>
    

        <div className={`w-fit whitespace-nowrap text-center dropdown-menu dropdown-menu-end ${show ? 'show' : ''}`} 
          aria-labelledby="dropdown-menu">
        <a className="py-1 px-4 hover:bg-footer-text-col nav-link" href="javascript:void(0)">Go to Profile</a>
        <a className="py-1 px-4 hover:bg-footer-text-col nav-link" href="javascript:void(0)">Messages</a>
        <a className="py-1 px-4 hover:bg-footer-text-col nav-link" href="javascript:void(0)">Saved Items</a>
        <Link to='/my-items' className="py-1 text-black px-4 hover:bg-footer-text-col nav-link">My Items</Link>
        <Link to='/add-items' className="py-1 text-black px-4 hover:bg-footer-text-col nav-link">Add Items</Link>
        <a className="py-1 px-4 hover:bg-footer-text-col nav-link" href="javascript:void(0)">Log Out</a>
      </div>
    </div>
  );
{/** const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='pr-10'>
      <button className='custom-md:hidden' onClick={toggleMenu} type="button">
        <span><FontAwesomeIcon className="text-white" icon={faBars} /></span>
      </button>
      <div className={`text-black whitespace-nowrap text-center shadow-[0_8px_16px_0px_rgba(0,0,0,0.2)] bg-blend-darken bg-white-smoke absolute top-12 right-2 ${isOpen ? 'block' : 'hidden'}`}>
        <a className="py-1 px-4 hover:bg-footer-text-col nav-link" href="javascript:void(0)">Go to Profile</a>
        <a className="py-1 px-4 hover:bg-footer-text-col nav-link" href="javascript:void(0)">Messages</a>
        <a className="py-1 hover:bg-footer-text-col px-4 nav-link" href="javascript:void(0)">Saved Items</a>
        <a className="py-1 px-4 hover:bg-footer-text-col nav-link" href="javascript:void(0)">My Items</a>
        <a className="py-1 hover:bg-footer-text-col px-4 nav-link" href="javascript:void(0)">Add Items</a>
        <a className="py-1 px-4 hover:bg-footer-text-col nav-link" href="javascript:void(0)">Log Out</a>

      </div>
    </div>
)*/}
}

export default HamburgerMenu