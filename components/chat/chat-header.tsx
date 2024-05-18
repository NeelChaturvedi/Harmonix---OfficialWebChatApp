import { Hash } from "lucide-react";
import { MobileToggle } from "../mobile-toggle";
import { UserAvatar } from "../user-avatar";
import { SocketIndicator } from "../socket-indicator";
import { ChatVideoButton } from "./chat-video-button";

interface ChatHeaderProps {
    serverId: string;
    name: string;
    type: "channel" | "conversation";
    imageUrl?: string; 
}


export const ChatHeader = ({
    serverId,
    name,
    type,
    imageUrl
}: ChatHeaderProps) => {
    return(
        <div className="text-md font-semibold px-3 flex items-center h-12 border-neutral-200 dark:border-sky-600 border-b-2">
            <MobileToggle serverId={serverId}/>
            {type === "channel" && (
                <Hash className="w-5 h-5 text-zinc-500 dark: text-blue-500/90" />
            )}
            {type === "conversation" && (
                <UserAvatar
                src={imageUrl}
                className="h-4 w-4 md:h-4 md:w-4 mr-4"/>
            )}
            <p className="font-semibold text-md text-black dark:text-white ml-2">
                {name}
            </p>
            <div className="ml-auto flex items-center">
                {type === "conversation" && (
                    <ChatVideoButton/>
                )}
                <SocketIndicator/>
            </div>
        </div>
    )
}