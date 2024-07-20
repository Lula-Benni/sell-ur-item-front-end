import React from "react";
import profileIcon from '../../assets/profile-icon.png'
import ChatWindow from "./ChatWindow";
import { Link } from "react-router-dom";
import MessageListComponent from "./MessageListComponent";
const MessageList = () => {
    return(
        <div className="w-fit py-3 px-4">
                    <h3 className="text-xs font-semibold uppercase text-gray-400 mb-1">Chats</h3>

                    <div className="h-[600px] overflow-y-scroll message-screen:w-[250px] divide-y divide-gray-200">

                        <MessageListComponent/>
                        <MessageListComponent/>
                        <MessageListComponent/>
                        <MessageListComponent/>
                        <MessageListComponent/>
                        <MessageListComponent/>
                        <MessageListComponent/>
                        <MessageListComponent/>
                        <MessageListComponent/>
                        <MessageListComponent/>

                    </div>
                    </div>
    )
}
export default MessageList