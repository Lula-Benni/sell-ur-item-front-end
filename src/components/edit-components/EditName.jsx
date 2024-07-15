import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const EditName = () =>{
    const [show, setShow] = useState(false);
    const toggleDropdown = () => setShow(!show);
    return(
        <div className=''>
            <a id='dropdown-menu' 
                className="relative bottom-[69px] left-[350px]" 
                href='#'
                data-bs-toggle="dropdown"
                aria-expanded={show}
                onClick={toggleDropdown}
            >Edit
            </a>
            
            <div className={`${show ? 'show' : 'hidden'}`}>
                <input className='bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[250px] p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white' type="text" id="item-name" name="item-name" placeholder="Edit item name" />
                <div className='pt-8 text-center'>
                    <button className='w-[400px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' type="submit" id="save-item-name" name="save-item-name">Save</button>
                </div>
            </div>
        </div>
    )
}
export default EditName