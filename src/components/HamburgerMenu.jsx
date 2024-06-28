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
    <div>
      <button className='md:hidden' onClick={toggleMenu} type="button">
        <span><FontAwesomeIcon className="text-white" icon={faBars} /></span>
      </button>
      <div className={`mt-2 ${isOpen ? 'block' : 'hidden'}`}>
        <ul className="space-x-20 navbar-nav m-auto">
            <li className="nav-item">
                <a className="nav-link" href="javascript:void(0)"><FontAwesomeIcon className='text-white' icon={faBookmark} /></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="javascript:void(0)"><FontAwesomeIcon className='text-white' icon={faComment} /></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="javascript:void(0)"><FontAwesomeIcon className='text-white' icon={faUser} /></a>
            </li> 
        </ul>
    </div>
    </div>
  )
}

export default HamburgerMenu