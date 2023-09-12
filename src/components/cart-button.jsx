import { BsCart3 } from "react-icons/bs";
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
                <BsCart3 className="w-5 h-5"></BsCart3>
            </button>

            <OrderModal isOpen={isOpen} setIsOpen={openModal} closeModal={closeModal}></OrderModal>
        </>
        
    );
}