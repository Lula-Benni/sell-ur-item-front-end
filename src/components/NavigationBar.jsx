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
            <div className="w-full flex justify-between items-center">
                <div className='hidden sm:flex flex items-center'  style={{paddingRight: '20%'}} >
                    <a className="no-underline flex items-center w-12 h-9 text-white" href="javascript:void(0)">
                        <img className="icon" src={icon} alt="icon"/>
                        <h4 className="navbar-brand">SellUrItem</h4>
                    </a>
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
                            <a className="nav-link" href="javascript:void(0)"><FontAwesomeIcon className='text-white' icon={faUser} /></a>
                        </li> 
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default NavigationBar;