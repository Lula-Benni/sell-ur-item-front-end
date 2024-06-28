import SearchBar from './SearchBar'
import HamburgerMenu from './HamburgerMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import icon from '../assets/icon.png'

function NavigationBar(){
    return(
        <nav className="navbar navbar-expand-sm navbar-dark bg-black">
            <div className="container-fluid">
                <a className="no-underline flex items-center w-12 h-9 text-white" href="javascript:void(0)">
                    <img className="icon" src={icon} alt="icon"/>
                    <h4 className="nav-heading">SellUrItem</h4>
                </a>
                <SearchBar className='size-3/5'/>
                <HamburgerMenu/>
                <div className="hidden md:flex flex-wrap">
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
        </nav>
    )
}
export default NavigationBar;