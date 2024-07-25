import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"

const Register = ()=> {
    const [profile,setprofile] = useState({
        fullName:"",
        userName:"",
        password:"",
        dateOfBirth:"",
        gender:""
    })
    const [contact,setContact] = useState({
        emails:"",
        cellNumber:""
    })
    const [address,setAddress] = useState({
        street:"",
        city:"",
        postalCode:"",
        state:"",
        country:"",
        additionalDetails:""
    })

    const{fullName,userName,password,dateOfBirth}=profile
    const{emails,cellNumber}=contact
    const{street,city,postalCode,state,country,additionalDetails}=address

    const onprofileInputChange = (e) => {
        setprofile({...profile,[e.target.name]:e.target.value})
    }

    const onContactInputChange = (e) => {
        setContact({...contact,[e.target.name]:e.target.value})
    }

    const onAddressInputChange = (e) => {
        setAddress({...address,[e.target.name]:e.target.value})
    }

    const onSubmit =async (e) => {
        e.preventDefault()
        profile["address"]=address;
        profile['contact']=contact;
        //console.log(`profile is : ${JSON.stringify(profile)}`);
        await axios.post("http://localhost:8182/save-profile",profile)
    }

    return(
        <div className="flex justify-center items-center">
        <div className="my-4 max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form onSubmit={(e) => onSubmit(e)} className="space-y-6" action="#">
                <h5 className="text-xl font-medium text-black dark:text-white">Register for SellUrItem Account</h5>
                <div>
                    <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-black dark:text-white">Full Name</label>
                    <input type={"text"} name="fullName" value={fullName} onChange={(e)=>onprofileInputChange(e)} className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter your fullname" required />
                </div>
                <div>
                    <label htmlFor="userName" className="block mb-2 text-sm font-medium text-black dark:text-white">userName</label>
                    <input type={"text"} value={userName} onChange={(e)=>onprofileInputChange(e)} name="userName" id="userName" className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter your userName" required />
                </div>
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-black dark:text-white">Email</label>
                    <input type={"email"} value={emails} onChange={(e)=>onContactInputChange(e)} name="emails" id="email" className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter your Email" required />
                </div>
                <div>
                    <label htmlFor="phone-number" className="block mb-2 text-sm font-medium text-black dark:text-white">Phone Number</label>
                    <input type={"text"} value={cellNumber} onChange={(e)=>onContactInputChange(e)} name="cellNumber" id="phone-number" className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter your phone number" required />
                </div>
                <div>
                    <label htmlFor="date-of-birth" className="block mb-2 text-sm font-medium text-black dark:text-white">Date of Birth</label>
                    <input type={"date"} value={dateOfBirth} onChange={(e)=>onprofileInputChange(e)} name="dateOfBirth" id="date-of-birth" className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                </div>
                <span htmlFor='gender' className="bg-white relative top-8 left-4  w-fit px-[4px] block mb-2 text-sm font-medium text-black dark:text-white">Gender</span>
                <div className="border rounded p-4 flex flex-row text-xs">
                    <input type={"radio"} onChange={(e)=>onprofileInputChange(e)} name="gender" id="male" value='MALE' className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                    <label htmlFor="male" className="text-sm text-black dark:text-white">Male</label>
                    <input type={"radio"} onChange={(e)=>onprofileInputChange(e)} name="gender" id="female" value='FEMALE' className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                    <label htmlFor="female" className="text-sm text-black dark:text-white">Female</label>
                    <input type={"radio"} onChange={(e)=>onprofileInputChange(e)} name="gender" id="other" value='OTHER' className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                    <label htmlFor="other" className="text-sm text-black dark:text-white">Other</label>
                </div>
                <span htmlFor="address" className="bg-white px-[4px] w-fit relative top-8 left-4 block text-sm font-medium text-black dark:text-white">Address</span>
                <div className="border-gray-300 border-[1px] rounded p-4">
                    <div>
                        <label htmlFor="street" className="block mb-2 text-sm font-medium text-black dark:text-white">Street</label>
                        <input type={"text"} value={street} onChange={(e)=>onAddressInputChange(e)} name="street" id="street" className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter your Street name" required />
                    </div>
                    <div>
                        <label htmlFor="city" className="block mb-2 text-sm font-medium text-black dark:text-white">City</label>
                        <input type={"text"} value={city} onChange={(e)=>onAddressInputChange(e)} name="city" id="city" className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter city" required />
                    </div>
                    <div>
                        <label htmlFor="postal-code" className="block mb-2 text-sm font-medium text-black dark:text-white">Postal Code</label>
                        <input type={"text"} value={postalCode} onChange={(e)=>onAddressInputChange(e)} name="postalCode" id="postal-code" className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter postal code" required />
                    </div>
                    <div>
                        <label htmlFor="state" className="block mb-2 text-sm font-medium text-black dark:text-white">State/Province</label>
                        <input type={"text"} value={state} onChange={(e)=>onAddressInputChange(e)} name="state" id="state" className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter the state/province of your city" required />
                    </div>
                    <div>
                        <label htmlFor="country" className="block mb-2 text-sm font-medium text-black dark:text-white">Country</label>
                        <input type={"text"} value={country} onChange={(e)=>onAddressInputChange(e)} name="country" id="country" className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter the country you reside in" required />
                    </div>
                    <div>
                        <label htmlFor="additional-etails" className="block mb-2 text-sm font-medium text-black dark:text-white">Additional Details</label>
                        <textarea cols={50} type={"text"} value={additionalDetails} onChange={(e)=>onAddressInputChange(e)} name="additionalDetails" id="additional-etails" className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter additional details" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-black dark:text-white">Enter your password</label>
                        <input value={password} onChange={(e)=>onprofileInputChange(e)} type={"password"} name="password" id="password" placeholder="Enter your password" className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    <div>
                        <input type={"password"} name="password" id="confirm-password" placeholder="Confirm password" className="mt-2 bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
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