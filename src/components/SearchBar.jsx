import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function SearchBar(){
    return(
        <div className="px-2 bg-slate-100 rounded-full flex flex-wrap box-border py-1">
            <input type="text" className="bg-slate-100 categories w-24 px-2" id="categories" placeholder="Categories"/>
            <input type="text" className="bg-slate-100 search w-64 h-auto px-2" id="search" placeholder="What are you looking for?"/>
            <button className='fa-solid fa-search bg-slate-100 px-2'><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
        </div>
    )
}
export default SearchBar