import { BsFillTrash3Fill } from "react-icons/bs";
import { AddressFormModal } from "./address-form-modal";
import { useState } from "react";
import { AddressDeleteModal } from "./address-delete-modal";

export function AddressCard({ name = "Receiver name", phoneNumber = "093456414718", address = "9249 Jeromy Drive Apt. 816" }) {
    let [isOpen, setIsOpen] = useState(false)
    let [isDeleteOpen, setIsDeleteOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    function closeDeleteModal() {
        setIsDeleteOpen(false)
    }

    function openDeleteModal() {
        setIsDeleteOpen(true)
    }



    return (
        <>
            <div className="flex flex-col justify-items-center p-2 rounded shadow">
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
                    <button className="text-black-100 hover:text-black-101 rounded-2xl font-bold m-1 p-2"
                        onClick={openModal}>
                        Edit
                    </button>

                    <button className="text-black-100 hover:text-black-101 rounded-2xl font-bold m-1 p-2"
                        onClick={openDeleteModal}>
                        Delete
                    </button>
                </div>
            </div>

            <AddressFormModal title="Update Address" isOpen={isOpen} onClose={closeModal}></AddressFormModal>
            <AddressDeleteModal isOpen={isDeleteOpen} onClose={closeDeleteModal}></AddressDeleteModal>

        </>

    );
}