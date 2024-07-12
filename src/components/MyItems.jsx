import Peter from '../assets/peter.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function MyItems(){
    return(
        <div className="max-w-sm bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
            <a className='' href="#">
                <img className="max-h-52 w-full" src={Peter} alt="" />
            </a>
            <div className="px-5 py-2">
                <h6 className="mb-2 text-2xl font-bold tracking-tight text-black dark:text-white">Item Name</h6>
                <p className="mb-2 font-bold tracking-tight text-black dark:text-white">Item Price</p>
                <p className="mb-2 font-bold tracking-tight text-black dark:text-white">Item Category</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <ul className="flex flex-wrap items-center justify-center pt-4">
                    <li className="">
                        <a className="nav-link text-red-500" href="javascript:void(0)"><FontAwesomeIcon className="text-red-500" icon={faTrash} /></a>
                    </li>
                    <li style={{paddingLeft: '30%', paddingRight: '30%'}} className="">
                        <a className="nav-link" href="javascript:void(0)"><FontAwesomeIcon className="text-blue-500" icon={faPen} /></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default MyItems