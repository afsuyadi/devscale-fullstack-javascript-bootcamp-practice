import { Mars, Venus } from "lucide-react";

interface NameCardProps {
    name : string;
    age : number;
    gender : "male" | "female"
    domicile : string;
}

export const NameCard = ({ name, age, gender, domicile}: NameCardProps) => {
    return (
        <div className={`p-4 rounded-2xl w-fit ${gender === 'female' ? 'bg-pink-200' : 'bg-blue-200'}`}>
            {gender === 'female' ? <Venus /> : <Mars />}
            <div className={gender === 'female' ? 'underline' : 'font-bold'}>Name : {name}</div>
            <div>Age : {age}</div>
            <div className={gender === 'male' ? 'text-red-600' : 'text-blue-600'}>Gender : {gender}</div>
            <div>Domicile : {domicile}</div>
        </div>
    )
}