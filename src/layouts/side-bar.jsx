import { SideBarList } from "../components/side-bar-list";

export function SideBar(){
    return(
      <div className='side-bar shadow bg-secondary w-2/12 p-2 flex justify-center'>

      <div className="fixed h-full mt-5">
        <div className=' flex flex-col justify-center'>
          <ul className='list-none'>
            <SideBarList path="food-page" name="Best Deals" />
            <SideBarList path="food-page" name="Breakfast" />
            <SideBarList path="food-page" name="Appetizers" />
            <SideBarList path="food-page" name="Drinks" />
          </ul>
        </div>
      </div>
    </div>

    );
}