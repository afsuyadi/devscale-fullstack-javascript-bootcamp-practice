import { userAtom } from "../atoms/userAtom";
import { useAtomValue } from "jotai";

interface sidebarProps {
    username : string;
}

export const Sidebar = ({username}:sidebarProps) => {
    const userData = useAtomValue(userAtom);

    return (
        <div className="bg-blue-700 text-white w-[300px] h-full">
            <div>Dashboard</div>
            <div>Home</div>
            <div>Bootcamp</div>
            <div>Settings : {userData.username}</div>
        </div>
    )
}