import { Link } from "react-router-dom"
import React from "react";
import profileIcon from '../../assets/profile-icon.png'

const MessageListComponent = () => {
    return(
        <Link to='/chat-window' className="py-4 no-underline text-black w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50">
            <div className="flex items-center">
                <img className="rounded-full items-start mr-3" src={profileIcon} width="32" height="32" alt="profile picture" />
                <div className="py-2.5">
                    <h4 className="text-sm font-semibold text-gray-900">Marie Zulfikar</h4>
                    <div className="text-[13px] font-bold">The video chat ended vhnjy j54 6k bo88ijuhygtbgnhm  k,mnbtrn jbvsr ,tmnrbtrrdszv m8it7rtdn· 2hrs</div>
                </div>
            </div>
        </Link>
    )
}
export default MessageListComponent