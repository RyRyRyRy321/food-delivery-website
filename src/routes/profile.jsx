import { AddressCard } from "../components/address-card";


export function Profile(){

    return (

        <div className="flex flex-row w-full justify-center">
            <div className="flex flex-col w-2/12 shadow m-1 p-2">
                <span className="font-bold text-light-dark">My Account</span>
                
                <ul>
                    <li className="text-light-dark">Profile</li>
                    <li className="text-light-dark">Banks and Cards</li>
                    <li className="text-light-dark">Change Password</li>
                </ul>
                
                <span className="font-bold text-light-dark">My Purchase</span>
                <span className="font-bold text-light-dark">Notifications</span>
            </div>
            <div className="w-10/12">
                
                <div className="flex flex-row items-center m-1 shadow">
                    <img className="w-32 h-32 rounded-full shadow m-5" src = "https://image-placeholder.com/images/actual-size/1920x1080.png1">
                        
                    </img>

                
                    <div className="flex flex-col">
                        <span className="m-2 text-left font-bold text-light-dark">Name</span>
                        <span className="m-2 text-left font-bold text-light-dark">Email</span>
                        <span className="m-2 text-left font-bold text-light-dark">Phone number</span>
                        <span className="m-2 text-left font-bold text-light-dark">Date of Birth</span>
                    </div>

                </div>

                <div>
                    <h2 className="text-lg font-bold m-5 text-light-dark">Addresses</h2>

                    <AddressCard></AddressCard>
                    <AddressCard></AddressCard>
                    <AddressCard></AddressCard>
                </div>
            </div>
        </div>
        
        

    );
}