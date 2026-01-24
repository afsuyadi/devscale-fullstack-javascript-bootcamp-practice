interface avatarProps {
    username : string;
}

export const Avatar = ({username} : avatarProps) => {
    return (
        <div>
            <div className="flex size-8 bg-blue-700 text-white font-medium justify-center items-center">{username.charAt(0)}</div>
        </div>
    )
}