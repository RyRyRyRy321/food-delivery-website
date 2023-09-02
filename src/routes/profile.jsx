import { AddressCard } from "../components/address-card";


export function Profile(){

    return (
        
        <div>
            
            <div className="flex flex-row items-center m-5 shadow">
                <img className="w-32 h-32 rounded-full shadow m-5" src = "https://image-placeholder.com/images/actual-size/1920x1080.png1">
                    
                </img>

            
                <div className="flex flex-col">
                    <span className="m-2 text-left font-bold">Name</span>
                    <span className="m-2 text-left font-bold">Email</span>
                    <span className="m-2 text-left font-bold">Phone number</span>
                    <span className="m-2 text-left font-bold">Date of Birth</span>
                </div>

            </div>
            <div>
                <h2 className="text-lg font-bold m-5">Addresses</h2>

                <AddressCard></AddressCard>
                <AddressCard></AddressCard>
                <AddressCard></AddressCard>
            </div>
        </div>

    );
}