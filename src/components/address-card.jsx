import { BsFillTrash3Fill } from "react-icons/bs";
import { AddressFormModal } from "./address-form-modal";
import { useState } from "react";
import { AddressDeleteModal } from "./address-delete-modal";

export function AddressCard({name = "Receiver name", phoneNumber = "093456414718", address = "9249 Jeromy Drive Apt. 816"}){
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
      setIsOpen(false)
    }
  
    function openModal() {
      setIsOpen(true)
    }

    let [isDeleteOpen, setIsDeleteOpen] = useState(false)

    function closeDeleteModal() {
      setIsDeleteOpen(false)
    }
  
    function openDeleteModal() {
      setIsDeleteOpen(true)
    }


    
    return (
        <div>
            <div className="flex flex-col justify-items-center p-5 m-5 rounded shadow">             
                <div className="userInformation flex flex-row">
                    <span className="m-1 font-bold text-black-100">{name}</span>
                    <span className="m-1 text-black-100">{phoneNumber}</span>
                </div>

                <div className=" flex flex-row">
                    <span className="m-1 text-black-100">
                        {address}
                    </span>
                </div>
                
                <div className="flex flex-row">
                    <button className="bg-color-3 text-black-100 rounded-2xl shadow font-bold m-1 p-2"
                    onClick={openModal}>
                        Edit
                    </button>

                    <button className="bg-color-3 text-black-100 rounded-2xl shadow font-bold m-1 p-2"
                    onClick={openDeleteModal}>
                        Delete
                    </button>
                </div>
            </div>

            <AddressFormModal isOpen={isOpen} closeModal={closeModal}></AddressFormModal>
            <AddressDeleteModal isOpen={isDeleteOpen} closeModal={closeDeleteModal}></AddressDeleteModal>

        </div>
        
    );
}