import { useEffect, useState, React } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faPencil } from '@fortawesome/free-solid-svg-icons';
import EditPrice from '../edit-components/EditPrice';
import EditName from '../edit-components/EditName';
import EditDescription from '../edit-components/EditDescription';
import EditProfileName from '../edit-components/EditProfileName';
import EditProfileUsername from '../edit-components/EditProfileUsername';
import EditNumber from '../edit-components/EditNumber';
import axios from 'axios';

const EditProfile = () =>{
    const [profile,setProfile] = useState([])
    const [contact,setContact] = useState([])

    useEffect(() => {
        loadProfile()
        loadContact()
    },[])

    const hideNumbers = (number) => {
       if (!number) return ''
       return number.slice(0,2)+'*'.repeat(number.length-3)+number.slice(-2)
    }

    const loadProfile = async () => {
        const result = await axios.get("http://localhost:8182/get-profile/254")
        setProfile(result.data)
    }
    const loadContact = async () => {
        const result = await axios.get("http://localhost:8182/get-contact/204")
        setContact(result.data)
    }
  return (
     <div className='flex justify-center items-center'>
        <div className="my-4 w-[390px] p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div>
                <h5>Name & Surname</h5>
                <div className='pt-2' >
                <h6 >{profile.fullName}</h6>
                </div>
                <EditProfileName/>
            </div>
            <hr/>
            <div>
                <h5>Username</h5>
                <div className='pt-2'>
                <h6 className=''>{profile.userName}</h6>       
                </div>
                <EditProfileUsername/>
            </div>
            <hr/>
            <div className='flex flex-row space-x-52'>
                <h5>Email</h5>
            </div>
            <div className='pt-2' >
                <h6 >{contact.emails}</h6>
            </div>
            <hr/>
            <div>
                <h5>Phone Number</h5>
                <div className='pt-2' >
                <h6 ><FontAwesomeIcon className='text-blue-800 mr-2' 
                    icon={faCircleCheck}></FontAwesomeIcon>{hideNumbers(contact.cellNumber)}</h6>
                </div>
                <EditNumber/>
            </div>
        </div>
     </div>
  );
}
export default EditProfile