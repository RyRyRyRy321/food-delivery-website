import { AddressTable, UserProfile, UserProfileSideBar } from "../components/UserProfile/profile-component";


export function Profile() {

    return (

        <div className="flex flex-row w-full justify-center">

            <div className="flex flex-col w-2/12 shadow m-1 p-2">
                <UserProfileSideBar></UserProfileSideBar>
            </div>

            <div className="w-10/12">
                <UserProfile></UserProfile>
                <AddressTable></AddressTable>
            </div>
            
        </div>



    );
}