import { MainContent } from "./main-content";
import { SideBarList } from "./side-bar-list";

export function SideBar(){
    return(
        <div className='side-bar h-full w-2/12'>
          <ul className='list-none flex flex-col p-2'>
            <SideBarList name="Best Deals"></SideBarList>
            <SideBarList name="Breakfast"></SideBarList>
            <SideBarList name="Appetizers"></SideBarList>
            <SideBarList name="Drinks"></SideBarList>
          </ul>
        </div>
    );
}