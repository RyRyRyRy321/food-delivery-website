import { Dialog } from '@headlessui/react'
import { BaseModal } from './base-modal';

export function AddressFormModal({ isOpen, onClose }) {


    return (
        <>
            <BaseModal open={isOpen} onClose={onClose} children={<AddressFormContent onClose={onClose}></AddressFormContent>}></BaseModal>
        </>
    );
}

function AddressFormContent({ onClose }) {


    const handleSubmit = (event) => {
        event.preventDefault();
        onClose();
    }

    return (
        <div className='flex flex-col'>
            <input className='p-2 border rounded' type='text' placeholder='Receiver name'></input>

            <h1 className='m-1 font-bold'>Address</h1>
            <form onSubmit={handleSubmit} >
                <div className='grid grid-cols-3 gap-2'>
                    <input className='p-2 border rounded' type='text' placeholder='Building No.'></input>
                    <input className='p-2 border rounded' type='text' placeholder='Street'></input>
                    <input className='p-2 border rounded' type='text' placeholder='Barangay/Subdivision'></input>
                    <input className='p-2 border rounded' type='text' placeholder='District/Municipality'></input>
                    <input className='p-2 border rounded' type='text' placeholder='City/Province'></input>
                </div>
                <div className='flex flex-row space-x-2 mt-2 justify-end'>
                    <button className=' p-1 border rounded' type='submit'>Update</button>
                    <button className=' p-1 border rounded' onClick={onClose}>Cancel</button>
                </div>

            </form>
        </div>
    );
}