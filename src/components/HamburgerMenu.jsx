import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faHouse, faUser } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import icon from '../assets/icon.png'

const HamburgerMenu = () => {
  const [show, setShow] = useState(false);
  const toggleDropdown = () => setShow(!show);

  return (
    <div className='custom-md:hidden pr-6'>
      <a id='dropdown-menu' 
        className="nav-link" 
        data-bs-toggle="dropdown"
        aria-expanded={show}
        onClick={toggleDropdown}
        >
        <FontAwesomeIcon className='text-white' icon={faBars}></FontAwesomeIcon></a>
        <div className={`w-fit whitespace-nowrap text-center dropdown-menu dropdown-menu-end ${show ? 'show' : ''}`} 
          aria-labelledby="dropdown-menu">
        <Link to='/home' className="p-2 ml-4 no-underline flex items-center w-12 h-9">
            <FontAwesomeIcon className='text-black' icon={faHouse} />
            <h6 className="pl-2 mt-2 navbar-brand text-black">Home</h6>
        </Link>
        <hr/>
        <div className='flex'>
          <FontAwesomeIcon className='rounded-full bg-zinc-500 p-2 h-[27px] w-[27px] text-7xl ml-4 mt-4 text-white' icon={faUser}></FontAwesomeIcon>
          <div className='text-blue-700'>
            <Link to='/edit-profile' className="py-1 px-4 hover:bg-footer-text-col nav-link">Go to Profile</Link>
            <Link to='/my-items' className="py-1 px-4 hover:bg-footer-text-col nav-link">View my Items</Link>
            <Link to='/add-items' className="py-1 px-4 hover:bg-footer-text-col nav-link">Add Items</Link>
          </div>
        </div>
        <hr/>
        <div className='justify-start items-start text-start'>
          <Link to='/messages' className="py-1 text-black px-4 hover:bg-footer-text-col nav-link"><FontAwesomeIcon className='text-black mr-2' icon={faCommentDots}></FontAwesomeIcon>Messages</Link>
          <Link to='/saved-items' className="py-1 text-black px-4 hover:bg-footer-text-col nav-link"><FontAwesomeIcon className='text-black mr-2' icon={faBookmark}></FontAwesomeIcon>Saved Items</Link>
          <hr/>
          <Link to='/add-items' className="text-center text-black px-4 hover:bg-footer-text-col nav-link">Log Out</Link>
        </div>
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