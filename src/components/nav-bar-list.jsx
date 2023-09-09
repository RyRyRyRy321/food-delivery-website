import { Link } from "react-router-dom";

export function NavigationBarList({name = "None", path}){
    return(
        <li>
            <Link className='font-bold text-black-100 hover:text-black-200' to = {path}>{name}</Link>
        </li>
    );
}