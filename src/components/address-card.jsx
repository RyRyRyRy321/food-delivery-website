

export function AddressCard({name = "Receiver name", phoneNumber = "093456414718", address = "9249 Jeromy Drive Apt. 816"}){
    return (
        <div className="flex flex-col justify-items-center p-5 m-1 border">             
            <div className="userInformation flex flex-row">
                <span className="m-1 font-bold">{name}</span>
                <span className="m-1">{phoneNumber}</span>
            </div>

            <div className=" flex flex-row">
                <span className="m-1">
                    {address}
                </span>
            </div>

        </div>
    );
}