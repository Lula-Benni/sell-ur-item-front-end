import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function SearchBar(){
    return(
        <div className="px-2 bg-slate-100 rounded-full flex flex-wrap box-border py-1">
            <select name='Category' className="bg-slate-100 categories w-28 px-2" id="categories">
                <option value="" disabled selected>Category</option>
                <option value="CELLPHONE">Cellphone</option>
                <option value="ACCESSORIES">Accessories</option>
                <option value="COMPUTERS">Computers</option>
                <option value="VIDEO_GAMES">Video Games</option>
                <option value="MUSICAL_INSTRUMENTS">Musical Instruments</option>
                <option value="BOOKS">Books</option>
            </select>
            <input type="text" className="border-l-2 border-r-2 bg-slate-100 search w-64 h-auto px-2" id="search" placeholder="What are you looking for?"/>
            <button className='fa-solid fa-search bg-slate-100 px-2'><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
        </div>
    )
}
export default SearchBar