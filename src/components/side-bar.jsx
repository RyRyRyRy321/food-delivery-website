import { MainContent } from "./main-content";
import { SideBarList } from "./side-bar-list";

export function SideBar(){
    return(
      <div className='side-bar w-2/12 p-2 flex justify-center'>

      <div className="fixed h-full mt-5">
        <div className=' flex flex-col justify-center'>
          <ul className='list-none'>
            <SideBarList name="Best Deals" />
            <SideBarList name="Breakfast" />
            <SideBarList name="Appetizers" />
            <SideBarList name="Drinks" />
          </ul>
        </div>
      </div>
    </div>

    );
}