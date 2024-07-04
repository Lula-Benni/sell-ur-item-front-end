import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

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
    </div>
    </div>
  )
}

export default HamburgerMenu