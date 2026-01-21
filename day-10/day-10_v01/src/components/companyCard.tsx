// import { Company } from "lucide-react";

interface CompanyCardProps {
    name : string;
    industry : string;
}

export const CompanyCard = ({name, industry}: CompanyCardProps) => {
    return (
        <div>
            <div>
                Name : {name}
            </div>
            <div>
                Industry : {industry}
            </div>
        </div>
    )
}