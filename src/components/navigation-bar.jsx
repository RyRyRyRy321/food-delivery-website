import { NavigationBarList } from "./nav-bar-list";

export function NavigationBar(){
    return (
    <nav className='nav-bar w-full h-20 border border-solid'>
        <div className="h-full flex flex-row justify-between items-center">
        
        <img className='w-14 h-14 rounded-full ms-7 me-10 border'></img>
        
        <ul className='list-none flex flex-row items-center me-auto'>
          <NavigationBarList name="Menu"></NavigationBarList>
        </ul>

        <ul className='list-none flex flex-row-reverse items-center '>
          <li>
            <a className='me-12 font-bold' href=''>Log In</a>
          </li> 
        </ul>

        

        </div>
    </nav>
    );
}