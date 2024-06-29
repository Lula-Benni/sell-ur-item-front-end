import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faXTwitter} from '@fortawesome/free-brands-svg-icons'
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons'


function FooterBar(){
    return(
        <div className="justify-center items-center text-stone-400 flex flex-wrap px-36 py-4 bg-black" >
            <div className="text-center" style={{paddingRight: '9%'}}>
                <h5 className="text-white">Get to know Us</h5>
                <ul >
                    <li><p className="hover:text-white">About SellUrItem</p></li>
                    <li><p className="hover:text-white">Rules for Posting item</p></li>
                    <li><p className="hover:text-white">SellUrItem Blog</p></li>
                </ul>
            </div>
            <div className="text-center" style={{paddingRight: '9%'}}>
                <h5 className="text-white">Explore</h5>
                <ul>
                    <li><p className="hover:text-white">SellUrItem Content</p></li>
                    <li><p className="hover:text-white">Locations</p></li>
                    <li><p className="hover:text-white">Mobile App</p></li>
                </ul>
            </div>
            <div className="text-center" style={{paddingRight: '9%'}}>
                <h5 className="text-white">Legal Bits</h5>
                <ul>
                    <li><p className="hover:text-white">Terms of Use</p></li>
                    <li><p className="hover:text-white">Privacy Policy</p></li>
                    <li><p className="hover:text-white">Cookie Policy</p></li>
                </ul>
            </div>
            <div className="text-center">
                <h5 className="text-white">Tips & Help</h5>
                <ul>
                    <li><p className="hover:text-white">Help & Contact Us</p></li>
                    <li><p className="hover:text-white">Stay Safe</p></li>
                    <li><p className="hover:text-white">ID Verification</p></li>
                </ul>
            </div>
            <div className="flex flex-wrap justify-center items-center w-screen space-x-0 md:space-x-20">
                <p className='pt-2.5 whitespace-nowrap'>&#169; 2024 SellUrItem. All Rights Reserved.</p>
                <div className="justify-center items-center whitespace-nowrap space-x-10">
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faLinkedin} />
                    <FontAwesomeIcon icon={faInstagram} />
                    <FontAwesomeIcon icon={faXTwitter} />
                    <FontAwesomeIcon icon={faWhatsapp} />
                </div>
            </div>
        </div>
    )
}
export default FooterBar;