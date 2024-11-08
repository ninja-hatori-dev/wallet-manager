import { Link } from "react-router-dom"

export function Bottomwarning ({label,buttontext,to }){

    return (
        <div>
            <div>
                {label}
            
            <Link className=" pointer underline pl-1 cursor-pointer text-blue-300" to={to}>{buttontext} </Link>
            </div>
        </div>
    )
}