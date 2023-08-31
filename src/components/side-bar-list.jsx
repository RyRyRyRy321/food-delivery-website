import { Link } from "react-router-dom";

export function SideBarList({name, path}){
    return (
        <li className="font-bold text-light-dark mb-6">
            <Link to = {path}>{name}</Link>
        </li>
    );
}