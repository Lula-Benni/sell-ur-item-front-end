import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const EditProfileName = () =>{
    const [show, setShow] = useState(false);
    const [anchorText, setAnchorText] = useState('Edit');

    const toggleDropdown = (event) => {setShow(!show)
        event.preventDefault();
        setAnchorText((prevText) => (prevText === 'Edit' ? 'Cancel' : 'Edit'));
    };
    return(
        <div className=''>
            <form>
            <a id='dropdown-menu' 
                style={{position: 'relative', bottom: '69px', left: '75%'}} 
                href='#'
                data-bs-toggle="dropdown"
                aria-expanded={show}
                onClick={toggleDropdown}
            >{anchorText}
            </a>
            
            <div className={`${show ? 'show' : 'hidden'}`}>
                <input className='bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[250px] p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white' type="text" id="edit-profile-name" name="edit-profile-name" placeholder="Edit name" />
                <div className='pt-8 text-center'>
                    <button style={{width: '100%'}} className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' type="submit" id="edit-profile-name" name="edit-profile-name">Save</button>
                </div>
            </div>
            </form>
        </div>
    )
}
export default EditProfileName