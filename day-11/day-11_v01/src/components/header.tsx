import { Avatar } from "./ui/avatar"
import { userAtom } from "../atoms/userAtom"
import { useAtomValue } from "jotai";

interface headerProps {
    username : string;
}

export const Header = ({username} : headerProps) => {
    const userData = useAtomValue(userAtom);
    return (
        <header className="flex justify-between">
        <div>Devscale</div>
        <div className="flex gap-2 items-center">
            <div>{userData.username}</div>
            <Avatar username={userData.username}/>
            <div className="bg-blue-700 text-white font-medium size-8 rounded-full flex justify-center items-center"></div>
            {userData.username.charAt(0)}
        </div>
        </header>
        
    )
}