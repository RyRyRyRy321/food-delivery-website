import { BsFillTrash3Fill } from "react-icons/bs";

export function AddressCard({name = "Receiver name", phoneNumber = "093456414718", address = "9249 Jeromy Drive Apt. 816"}){
    return (
        <div>
            <div className="flex flex-col justify-items-center p-5 m-5 rounded shadow">             
                <div className="userInformation flex flex-row">
                    <span className="m-1 font-bold">{name}</span>
                    <span className="m-1">{phoneNumber}</span>
                </div>

                <div className=" flex flex-row">
                    <span className="m-1">
                        {address}
                    </span>
                </div>
                
                <div className="flex flex-row">
                    <button className="bg-color-3 text-light-dark rounded-2xl shadow font-bold m-1 p-2">Edit</button>
                    <button className="bg-color-3 text-light-dark rounded-2xl shadow font-bold m-1 p-2">Delete</button>
                </div>
            </div>
        </div>
        
    );
}