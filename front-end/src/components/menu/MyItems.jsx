import Peter from '../../assets/peter.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import DeleteItemModal from './DeleteItemModal';
import EditItemModal from './EditItemModal';
import { useEffect, useState } from 'react';
import axios from 'axios';

function MyItems(){
    const [items,setItems] = useState([])

    useEffect(() => {
        loadItems()
    },[])

    const loadItems = async () => {
        const result = await axios.get("http://localhost:8182/get-items")
        setItems(result.data)
    }

    return(
        <div className='flex flex-wrap p-4 sm:justify-start justify-center'>
        {
            items.map((item)=>(
                <div className="mr-4 mb-4 max-w-[245px] bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
                    <a className='' href="#">
                        <img className="max-h-52 w-full" src={Peter} alt="" />
                    </a>
                    <div className="px-5 py-2">
                        <h6 className="mb-2 text-2xl font-bold tracking-tight text-black dark:text-white">{item.itemName}</h6>
                        <p className="mb-2 font-bold tracking-tight text-black dark:text-white">R{item.itemPrice}</p>
                        <p className="mb-2 font-bold tracking-tight text-black dark:text-white">{item.category}</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.itemDescription}</p>
                        <div className="space-x-24 flex flex-row justify-center py-4">
                            <DeleteItemModal/>
                            <EditItemModal itemName={item.itemName} itemPrice={item.itemPrice} itemCategory={item.category} itemDescription={item.itemDescription}/>
                        </div>
                    </div>
                </div>
            ))
        }
        </div>
    )
}
export default MyItems