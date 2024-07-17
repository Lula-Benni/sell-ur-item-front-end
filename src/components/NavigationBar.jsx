import React, { useState } from 'react';
import SearchBar from './SearchBar'
import HamburgerMenu from './HamburgerMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faPencil, faPlus, faUser } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import icon from '../assets/icon.png'
import { Link } from 'react-router-dom';

function NavigationBar(){
    const [show, setShow] = useState(false);

    const toggleDropdown = () => setShow(!show);
  
    return(
        <nav className="navbar navbar-expand-sm navbar-dark bg-black">
            <div className="w-full flex justify-between items-center">
                <div className='hidden sm:flex flex items-center'  style={{paddingRight: '20%'}} >
                    <Link to='/home' className="no-underline flex items-center w-12 h-9 text-white">
                        <img className="icon" src={icon} alt="icon"/>
                        <h4 className="navbar-brand">SellUrItem</h4>
                    </Link>
                </div>
                <SearchBar className='inline'/>
                <HamburgerMenu/>
                <div  style={{paddingLeft: '2%', paddingRight: '3%'}} className="hidden custom-md:flex items-center">
                    <ul className="inline items-end justify-end space-x-10 navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="javascript:void(0)"><FontAwesomeIcon className='text-white' icon={faBookmark} /></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="javascript:void(0)"><FontAwesomeIcon className='text-white' icon={faComment} /></a>
                        </li>
                        <li className="nav-item">
                            <a id='dropdown-menu' 
                               className="nav-link dropdown-toggle" 
                               href='#'
                               data-bs-toggle="dropdown"
                               aria-expanded={show}
                               onClick={toggleDropdown}
                               >
                                <FontAwesomeIcon className='text-white' icon={faUser}></FontAwesomeIcon></a>
                            <div className={`w-fit whitespace-nowrap text-start dropdown-menu dropdown-menu-end ${show ? 'show' : ''}`} 
                                aria-labelledby="dropdown-menu">
                                <Link to='/add-items' className="py-1 text-black px-4 hover:bg-footer-text-col nav-link"><FontAwesomeIcon className='text-black mr-2' icon={faUser}></FontAwesomeIcon>Go to Profile</Link>
                                <Link to='/my-items' className="py-1 text-black px-4 hover:bg-footer-text-col nav-link"><FontAwesomeIcon className='text-black mr-2' icon={faPencil}></FontAwesomeIcon>My Items</Link>
                                <Link to='/add-items' className="py-1 text-black px-4 hover:bg-footer-text-col nav-link"><FontAwesomeIcon className='text-black mr-2' icon={faPlus}></FontAwesomeIcon>Add Items</Link>
                                <hr/>
                                <Link to='/my-items' className="text-center text-black px-4 hover:bg-footer-text-col nav-link">Log Out</Link>
                            </div>
                        </li> 
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default NavigationBar;