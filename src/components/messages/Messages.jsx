import React from "react";
import profileIcon from '../../assets/profile-icon.png'
import ChatWindow from "./ChatWindow";
import { Link } from "react-router-dom";
import MessageList from "./MessageList";
import SendMessage from "./SendMessage";

const Messages = () => {
    return(
        <div className="flex">
            <MessageList/>
            <div className="hidden message-screen:block w-full">
            <ChatWindow/>    
            </div>
        </div>
    )
}
export default Messages