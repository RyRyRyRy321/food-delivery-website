import { AddressCard } from "../../components/address-card";


export function UserProfile() {
    return (
        <div className="flex flex-row items-center m-1 shadow">
            <img className="w-32 h-32 rounded-full shadow m-5" src="https://image-placeholder.com/images/actual-size/1920x1080.png1">

            </img>


            <div className="flex flex-col">
                <span className="m-2 text-left font-bold text-black-100">Name</span>
                <span className="m-2 text-left font-bold text-black-100">Email</span>
                <span className="m-2 text-left font-bold text-black-100">Phone number</span>
                <span className="m-2 text-left font-bold text-black-100">Date of Birth</span>
            </div>

        </div>
    );
}

export function AddressTable() {
    return (
        <div>
            <h2 className="text-lg font-bold m-5 text-black-100">Addresses</h2>

            <AddressCard></AddressCard>
            <AddressCard></AddressCard>
            <AddressCard></AddressCard>
        </div>
    );
}

export function UserProfileSideBar() {
    return (
        <>
            <span className="font-bold text-black-100">My Account</span>

            <ul>
                <li className="text-black-100">Profile</li>
                <li className="text-black-100">Banks and Cards</li>
                <li className="text-black-100">Change Password</li>
            </ul>

            <span className="font-bold text-black-100">My Purchase</span>
            <span className="font-bold text-black-100">Notifications</span>

        </>
    );
}