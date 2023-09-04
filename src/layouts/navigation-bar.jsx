import { Link } from "react-router-dom";
import { NavigationBarList } from "../components/nav-bar-list";
import { BsBasket, BsFillBellFill } from "react-icons/bs";
import { CartButton } from "../components/cart-button";

export function NavigationBar(){
    return (
    <nav className='nav-bar drop-shadow bg-color-3 w-full h-20 sticky top-0'>
        <div className="h-full flex flex-row justify-between items-center">
        
        <img className='w-14 h-14 rounded-full ms-20 me-10 border'></img>
        
        <ul className='list-none flex flex-row items-center me-auto'>
          <NavigationBarList name="Home" path="/"></NavigationBarList>
        </ul>

        <ul className='list-none flex flex-row items-center '>

          <li className="me-4">
            <CartButton></CartButton>
          </li>

          <li className="me-6">
            <button>
              <BsFillBellFill></BsFillBellFill>
            </button>
          </li>


          <li>
            <Link className='me-12 font-bold text-light-dark' to="profile">Log in</Link>
          </li>

        </ul>

        

        </div>
    </nav>
    );
}