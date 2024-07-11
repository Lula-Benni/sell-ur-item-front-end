const ForgotPassword = ({showLogin}) =>{
    return(
        <div className="flex justify-center items-center">
        <div className="my-4 max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form className="space-y-6" action="#">
                <h5 className="text-xl font-medium text-black dark:text-white">Forgot your SellUrItem Password?</h5>
                <div>
                    <label for="email" className="block mb-2 text-sm font-medium text-black dark:text-white">Email</label>
                    <input type="email" name="email" id="email" className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter your Email" required />
                </div>
                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                <hr/>
                <a onClick={showLogin} href="#" className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Forgot Password?</a>
            </form>
        </div>
        </div>
    )
}
export default ForgotPassword