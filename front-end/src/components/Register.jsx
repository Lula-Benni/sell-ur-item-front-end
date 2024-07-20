import { Link } from "react-router-dom"

const Register = ({showLogin})=> {
    return(
        <div className="flex justify-center items-center">
        <div className="my-4 max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form className="space-y-6" action="#">
                <h5 className="text-xl font-medium text-black dark:text-white">Register for SellUrItem Account</h5>
                <div>
                    <label for="fullname" className="block mb-2 text-sm font-medium text-black dark:text-white">Full Name</label>
                    <input type="text" name="fullname" id="fullname" className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter your fullname" required />
                </div>
                <div>
                    <label for="username" className="block mb-2 text-sm font-medium text-black dark:text-white">Username</label>
                    <input type="text" name="username" id="username" className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter your username" required />
                </div>
                <div>
                    <label for="email" className="block mb-2 text-sm font-medium text-black dark:text-white">Email</label>
                    <input type="email" name="email" id="email" className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter your Email" required />
                </div>
                <div>
                    <label for="phone-number" className="block mb-2 text-sm font-medium text-black dark:text-white">Phone Number</label>
                    <input type="text" name="phone-number" id="phone-number" className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter your phone number" required />
                </div>
                <div>
                    <label for="date-of-birth" className="block mb-2 text-sm font-medium text-black dark:text-white">Date of Birth</label>
                    <input type="date" name="date-of-birth" id="date-of-birth" className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                </div>
                <span for='gender' className="bg-white relative top-8 left-4  w-fit px-[4px] block mb-2 text-sm font-medium text-black dark:text-white">Gender</span>
                <div className="border rounded p-4 flex flex-row text-xs">
                    <input type="radio" name="gender" id="male" value='MALE' className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                    <label for="male" className="text-sm text-black dark:text-white">Male</label>
                    <input type="radio" name="gender" id="female" value='FEMALE' className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                    <label for="female" className="text-sm text-black dark:text-white">Female</label>
                    <input type="radio" name="gender" id="other" value='OTHER' className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                    <label for="other" className="text-sm text-black dark:text-white">Other</label>
                </div>
                <span for="address" className="bg-white px-[4px] w-fit relative top-8 left-4 block text-sm font-medium text-black dark:text-white">Address</span>
                <div className="border-gray-300 border-[1px] rounded p-4">
                    <div>
                        <label for="street" className="block mb-2 text-sm font-medium text-black dark:text-white">Street</label>
                        <input type="text" name="street" id="street" className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter your Street name" required />
                    </div>
                    <div>
                        <label for="city" className="block mb-2 text-sm font-medium text-black dark:text-white">City</label>
                        <input type="text" name="city" id="city" className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter city" required />
                    </div>
                    <div>
                        <label for="postal-code" className="block mb-2 text-sm font-medium text-black dark:text-white">Postal Code</label>
                        <input type="text" name="postal-code" id="postal-code" className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter postal code" required />
                    </div>
                    <div>
                        <label for="state" className="block mb-2 text-sm font-medium text-black dark:text-white">State/Province</label>
                        <input type="text" name="state" id="state" className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter the state/province of your city" required />
                    </div>
                    <div>
                        <label for="country" className="block mb-2 text-sm font-medium text-black dark:text-white">Country</label>
                        <input type="text" name="country" id="country" className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter the country you reside in" required />
                    </div>
                    <div>
                        <label for="additional-etails" className="block mb-2 text-sm font-medium text-black dark:text-white">Additional Details</label>
                        <textarea cols={50} type="text" name="additional-etails" id="additional-etails" className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter additional details" />
                    </div>
                    <div>
                        <label for="password" className="block mb-2 text-sm font-medium text-black dark:text-white">Enter your password</label>
                        <input type="password" name="password" id="password" placeholder="Enter your password" className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    <div>
                        <input type="password" name="password" id="password" placeholder="Confirm password" className="mt-2 bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                </div>
                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register your account</button>
            </form>
            <div className="pt-4 text-sm font-medium text-gray-700 dark:text-gray-300">
            Already have an account? <Link to='/login' className="pl-2 text-blue-700 hover:underline dark:text-blue-500">Click here to login</Link>
            </div>
        </div>
        </div>
    )
}
export default Register