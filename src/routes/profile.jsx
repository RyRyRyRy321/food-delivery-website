import { AddressCard } from "../components/address-card";


export function Profile(){

    return (
        
        <div>
            
            <div className="flex flex-row w-full items-center">
                <img className="w-32 h-32 border rounded-full m-5" src = "https://image-placeholder.com/images/actual-size/1920x1080.png1">
                    
                </img>

            
                <div className="flex flex-col">
                    <span className="m-2 text-left font-bold">Name</span>
                    <span className="m-2 text-left font-bold">Email</span>
                    <span className="m-2 text-left font-bold">Phone number</span>
                    <span className="m-2 text-left font-bold">Date of Birth</span>
                </div>

            </div>
            <div>

                <h2>Addresses</h2>

                
                <AddressCard></AddressCard>
                <AddressCard></AddressCard>
                <AddressCard></AddressCard>



            </div>
        </div>

    );
}