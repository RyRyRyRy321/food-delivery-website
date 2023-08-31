import { Link } from "react-router-dom";

export function SideBarList({name, path}){
    return (
        <li className="mb-6">
            <Link to = {path}>{name}</Link>
        </li>
    );
}