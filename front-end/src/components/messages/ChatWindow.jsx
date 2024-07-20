import FromMessage from "./FromMessages"
import SendMessage from "./SendMessage"
import ToMessage from "./ToMessage"

const ChatWindow = () => {
    return(
        <>
        <div className="h-[645px] w-full overflow-y-scroll flex-1 p-4">
            <div className="flex flex-col space-y-2">

            <ToMessage/>
                <FromMessage/>
                <ToMessage/>
                <FromMessage/>
                <ToMessage/>              
                <FromMessage/>
                <ToMessage/>              
                <FromMessage/>
                <ToMessage/>             
                <FromMessage/>
                <ToMessage/>              
                <FromMessage/>
                <ToMessage/>          
                <FromMessage/>
                <ToMessage/>             
                <FromMessage/>
            </div>
            <div className="bg-white sticky bottom-0">
            <SendMessage/>
            </div>
        </div>
        </>
    )
}
export default ChatWindow