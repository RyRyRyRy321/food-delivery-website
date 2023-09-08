import { Dialog } from '@headlessui/react'

export function AddressDeleteModal({isOpen, closeModal}){

    return (
        <>
            <Dialog className="relative z-50" open={isOpen} onClose={closeModal}>

                <div className="fixed inset-0 bg-black-200 bg-opacity-25"/>

                <div className='fixed inset-0 flex items-center justify-center p-4'>

                
                
                <Dialog.Panel className="bg-white-100 rounded-lg p-5 shadow">

                    <h1 className='font-bold'>Delete Address?</h1>
                    
                    <p>This will delete the current address <span className='font-bold'>PERMANENTLY</span>.</p>
                    <div className="flex flex-row space-x-2 mt-2">
                        <button className='p-1 border rounded' onClick={closeModal}>Delete</button>
                        <button className='p-1 border rounded' onClick={closeModal}>Cancel</button>
                    </div>
                    
                    
                </Dialog.Panel>
                </div>
            </Dialog>
        </>
    );
}