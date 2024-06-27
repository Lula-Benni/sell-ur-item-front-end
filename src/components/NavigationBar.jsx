function NavigationBar(){
    return(
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="javascript:void(0)">Logo</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="input-container flex flex-wrap box-border h-10">
                    <input type="text" className="categories w-24" id="categories" placeholder="Categories"/>
                    <input type="text" className="search w-64" id="search" placeholder="What are you looking for?"/>
                    <button className='bg-white'>Search</button>
                </div>
                <div className="flex flex-wrap">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="javascript:void(0)">Link</a>
                    </li>
                    
                </ul>
                </div>
            </div>
        </nav>

    )
}
export default NavigationBar;