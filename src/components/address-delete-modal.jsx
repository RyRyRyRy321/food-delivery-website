import { Dialog } from '@headlessui/react'
import { BaseModal } from './base-modal';
import { AiOutlineWarning } from 'react-icons/ai';

export function AddressDeleteModal({ isOpen, onClose }) {

    return (
        <BaseModal open={isOpen} onClose={onClose} children={<AddressDeleteContent onClose={onClose}></AddressDeleteContent>}></BaseModal>
    );
}

function AddressDeleteContent({ onClose }) {
    return (
        <div className='flex flex-col justify-center'>
            <div className='flex flex-row justify-center space-x-1 mb-2'>
                <AiOutlineWarning className='w-6 h-6 text-red-100'></AiOutlineWarning>
                <h1 className='font-bold text-center text-base'>Delete Address</h1>
            </div>

            <p className='mb-2'>This will delete the address <span className='font-bold'>PERMANENTLY</span>.</p>



            <div className='flex flex-col p-2 border shadow rounded'>

                <p className="font-bold text-black-100">Receiver name</p>

                <p className="text-black-100">093456414718</p>

                <p className="text-black-100">
                    9249 Jeromy Drive Apt. 816
                </p>

            </div>

            <div className="flex flex-row justify-end space-x-2 mt-2">
                <button className='p-2 border shadow rounded-2xl border-red-100 text-red-100 hover:bg-red-100 hover:text-white-100' onClick={onClose}>Delete</button>
                <button className='p-2 border shadow rounded-2xl border-black-100 text-black-100 hover:bg-black-100 hover:text-white-100' onClick={onClose}>Cancel</button>
            </div>
        </div>
    );
}