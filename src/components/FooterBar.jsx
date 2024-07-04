import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faXTwitter} from '@fortawesome/free-brands-svg-icons'
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons'


function FooterBar(){
    return(
        <div className="whitespace-nowrap justify-center items-center text-white flex flex-wrap px-36 py-4 bg-black" >
            <div className="text-center" style={{paddingRight: '9%'}}>
                <h5 className="pl-8">Get to know Us</h5>
                <ul>
                    <li><a className="nav-link opacity-75 hover:opacity-100" href="javascript:void(0)">About SellUrItem</a></li>
                    <li><a className="nav-link opacity-75 hover:opacity-100" href="javascript:void(0)">Rules for Posting item</a></li>
                    <li><a className="nav-link opacity-75 hover:opacity-100" href="javascript:void(0)">SellUrItem Blog</a></li>
                </ul>
            </div>
            <div className="text-center" style={{paddingRight: '9%'}}>
                <h5 className="pl-8">Explore</h5>
                <ul>
                    <li><a className="nav-link opacity-75 hover:opacity-100" href="javascript:void(0)">SellUrItem Content</a></li>
                    <li><a className="nav-link opacity-75 hover:opacity-100" href="javascript:void(0)">Locations</a></li>
                    <li><a className="nav-link opacity-75 hover:opacity-100" href="javascript:void(0)">Mobile App</a></li>
                </ul>
            </div>
            <div className="text-center" style={{paddingRight: '9%'}}>
                <h5 className="pl-8">Legal Bits</h5>
                <ul>
                    <li><a className="nav-link opacity-75 hover:opacity-100" href="javascript:void(0)">Terms of Use</a></li>
                    <li><a className="nav-link opacity-75 hover:opacity-100" href="javascript:void(0)">Privacy Policy</a></li>
                    <li><a className="nav-link opacity-75 hover:opacity-100" href="javascript:void(0)">Cookie Policy</a></li>
                </ul>
            </div>
            <div className="text-center">
                <h5 className="pl-8">Tips & Help</h5>
                <ul>
                    <li><a className="nav-link opacity-75 hover:opacity-100" href="javascript:void(0)">Help & Contact Us</a></li>
                    <li><a className="nav-link opacity-75 hover:opacity-100" href="javascript:void(0)">Stay Safe</a></li>
                    <li><a className="nav-link opacity-75 hover:opacity-100" href="javascript:void(0)">ID Verification</a></li>
                </ul>
            </div>
            <div className="flex flex-wrap justify-center items-center w-screen space-x-0 md:space-x-20">
                <p className='pt-2.5 whitespace-nowrap'>&#169; 2024 SellUrItem. All Rights Reserved.</p>
                <div className="justify-center items-center whitespace-nowrap space-x-10">
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faEnvelope} />
                    <FontAwesomeIcon icon={faInstagram} />
                    <FontAwesomeIcon icon={faXTwitter} />
                    <FontAwesomeIcon icon={faWhatsapp} />
                </div>
            </div>
        </div>
    )
}
export default FooterBar;