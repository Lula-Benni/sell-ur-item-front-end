import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function SearchBar(){
    return(
        <div className="px-2 bg-slate-100 rounded-full inline py-1">
            <select name='Category' className="hidden custom-sm:inline px-2 bg-transparent w-28" id="categories">
                <option value="" disabled selected>Category</option>
                <option value="CELLPHONE">Cellphone</option>
                <option value="ACCESSORIES">Accessories</option>
                <option value="COMPUTERS">Computers</option>
                <option value="VIDEO_GAMES">Video Games</option>
                <option value="MUSICAL_INSTRUMENTS">Musical Instruments</option>
                <option value="BOOKS">Books</option>
            </select>
            <input type="text" className="pl-2 bg-transparent" style={{width: '210px'}} id="search" placeholder="What are you looking for?"/>
            <button className='size-fit bg-transparent'><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
        </div>
    )
}
export default SearchBar