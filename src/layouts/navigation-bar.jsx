import { Link } from "react-router-dom";
import { NavigationBarList } from "../components/nav-bar-list";
import { BsBasket, BsFillBellFill } from "react-icons/bs";
import { CartButton } from "../components/cart-button";
import { LoginModal } from "../components/AuthModals/login-modal";

import { useState } from "react";
import { RegisterModal } from "../components/AuthModals/register-modal";

export function NavigationBar() {

  let [isLoginOpen, setIsLoginOpen] = useState(false)
  let [isRegisterOpen, setIsRegisterOpen] = useState(false)

  function closeLoginModal() {
    setIsLoginOpen(false)
  }

  function openLoginModal() {
    setIsLoginOpen(true)
  }

  function closeRegisterModal() {
    setIsRegisterOpen(false)
  }

  function openRegisterModal() {
    setIsRegisterOpen(true)
  }


  return (
    <nav className='nav-bar drop-shadow bg-green-100 w-full h-20 sticky top-0'>
      <div className="h-full flex flex-row justify-between items-center">

        <img className='w-14 h-14 rounded-full ms-20 me-10 border'></img>

        <ul className='list-none flex flex-row items-center space-x-3 me-auto'>
          <NavigationBarList name="Home" path="/"></NavigationBarList>
          <NavigationBarList path="food-page" name="Best Deals" />
          <NavigationBarList path="food-page" name="Breakfast" />
          <NavigationBarList path="food-page" name="Appetizers" />
          <NavigationBarList path="food-page" name="Drinks" />
        </ul>

        <ul className='me-12 list-none flex flex-row items-center space-x-3'>

          <li>
            <CartButton></CartButton>
          </li>

          <li>
            <button>
              <BsFillBellFill></BsFillBellFill>
            </button>
          </li>


          <li>
            <Link className='font-bold text-black-100' to="profile">Profile</Link>
          </li>

          <li>
            <button className='font-bold text-black-100' onClick={openLoginModal}>Log in</button>
          </li>

          <li>
            <button className='font-bold text-black-100' onClick={openRegisterModal}>Register</button>
          </li>

        </ul>

        <LoginModal isOpen={isLoginOpen} onClose={closeLoginModal}></LoginModal>
        <RegisterModal isOpen={isRegisterOpen} onClose={closeRegisterModal}></RegisterModal>
      </div>
    </nav>
  );
}