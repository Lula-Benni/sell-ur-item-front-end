import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const EditDescription = () =>{
    const [show, setShow] = useState(false);
    const [anchorText, setAnchorText] = useState('Edit');

    const toggleDropdown = (event) => {setShow(!show)
        event.preventDefault();
        setAnchorText((prevText) => (prevText === 'Edit' ? 'Cancel' : 'Edit'));
    };
    return(
        <div className=''>
            <a id='dropdown-menu' 
                className="relative bottom-[69px] left-[350px]" 
                href='#'
                data-bs-toggle="dropdown"
                aria-expanded={show}
                onClick={toggleDropdown}
            >{anchorText}
            </a>
            
            <div className={`${show ? 'show' : 'hidden'}`}>
            <textarea cols={50} type="text" name="item-details" id="item-details" className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Describe your item" />
            <div className='pt-8 text-center'>
                    <button className='w-[400px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' type="submit" id="save-item-price" name="save-item-name">Save</button>
                </div>
            </div>
        </div>
    )
}
export default EditDescription