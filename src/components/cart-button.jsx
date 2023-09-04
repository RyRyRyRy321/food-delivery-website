import { BsBasket } from "react-icons/bs";
import { OrderModal } from "./order-modal";
import { useState } from "react";

export function CartButton(){

    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
      setIsOpen(false)
    }
  
    function openModal() {
      setIsOpen(true)
    }


    return (
        <>
            <button onClick={openModal}>
                <BsBasket></BsBasket>
            </button>

            <OrderModal isOpen={isOpen} setIsOpen={openModal} closeModal={closeModal}></OrderModal>
        </>
        
    );
}