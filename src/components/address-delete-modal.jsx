import { Dialog } from '@headlessui/react'
import { BaseModal } from './base-modal';

export function AddressDeleteModal({ isOpen, onClose }) {

    return (
        <BaseModal open={isOpen} onClose={onClose} children={<AddressDeleteContent onClose={onClose}></AddressDeleteContent>}></BaseModal>
    );
}

function AddressDeleteContent({onClose}) {
    return (
        <>
            <h1 className='font-bold'>Delete Address?</h1>

            <p>This will delete the current address <span className='font-bold'>PERMANENTLY</span>.</p>
            <div className="flex flex-row space-x-2 mt-2">
                <button className='p-1 border rounded' onClick={onClose}>Delete</button>
                <button className='p-1 border rounded' onClick={onClose}>Cancel</button>
            </div>
        </>
    );
}