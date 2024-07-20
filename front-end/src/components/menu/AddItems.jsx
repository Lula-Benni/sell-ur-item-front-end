const AddItems = ()=> {
    return(
        <div className="flex justify-center items-center">
        <div className="my-4 max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form className="space-y-6" action="#">
                <h5 className="text-xl font-medium text-black dark:text-white">Add an Item to sell</h5>
                <div>
                    <label for="item-name" className="block mb-2 text-sm font-medium text-black dark:text-white">Item Name</label>
                    <input type="text" name="item-name" id="item-name" className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter your item name" required />
                </div>
                <div>
                    <label for="price" className="block mb-2 text-sm font-medium text-black dark:text-white">Item Price</label>
                    <input type="number" name="price" id="price" className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter your username" required />
                </div>
                <span for='gender' className="px-[4px] block text-sm font-medium text-black dark:text-white">Category</span>
                <select name='Category' className="border-[1px] rounded px-2 bg-transparent h-10" id="categories">
                    <option value="" disabled selected>Category</option>
                    <option value="CELLPHONE">Cellphone</option>
                    <option value="ACCESSORIES">Accessories</option>
                    <option value="COMPUTERS">Computers</option>
                    <option value="VIDEO_GAMES">Video Games</option>
                    <option value="MUSICAL_INSTRUMENTS">Musical Instruments</option>
                    <option value="BOOKS">Books</option>
                </select>
                <div>
                    <label for="item-details" className="block mb-2 text-sm font-medium text-black dark:text-white">Item Description</label>
                    <textarea cols={50} type="text" name="item-details" id="item-details" className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Describe your item" />
                </div>
                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Item</button>
            </form>
        </div>
        </div>
    )
}
export default AddItems