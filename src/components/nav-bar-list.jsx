import { Link } from "react-router-dom";

export function NavigationBarList({name, path}){
    return(
        <li>
            <Link className='m-4 font-bold' to = {path}>{name}</Link>
        </li>
    );
}