import { userAtom } from "../atoms/userAtom";
import { useAtomValue } from "jotai";

interface dashboardProps {
    username : string;
}

export const Dashboard = ({username}:dashboardProps) => {
    const userData = useAtomValue(userAtom);
    return (
        <div className="flex-1">
            <div className="text-3xl">Welcome, {userData.username}!</div>
        </div>
    )
}