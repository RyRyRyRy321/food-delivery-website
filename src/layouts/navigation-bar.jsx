import { NavigationBarList } from "../components/nav-bar-list";
import { BsBasket, BsFillBellFill } from "react-icons/bs";

export function NavigationBar(){
    return (
    <nav className='nav-bar bg-color-3 w-full h-20 border border-solid sticky top-0'>
        <div className="h-full flex flex-row justify-between items-center">
        
        <img className='w-14 h-14 rounded-full ms-7 me-10 border'></img>
        
        <ul className='list-none flex flex-row items-center me-auto'>
          <NavigationBarList name="Menu"></NavigationBarList>
        </ul>

        <ul className='list-none flex flex-row items-center '>

          <li className="me-4">
            <button>
              <BsBasket></BsBasket>
            </button>
          </li>

          <li className="me-6">
            <button>
              <BsFillBellFill></BsFillBellFill>
            </button>
          </li>


          <li>
            <a className='me-12 font-bold' href=''>Log In</a>
          </li> 
        </ul>

        

        </div>
    </nav>
    );
}