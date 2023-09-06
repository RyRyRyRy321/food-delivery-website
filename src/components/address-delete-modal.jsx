import { Dialog } from '@headlessui/react'

export function AddressDeleteModal({isOpen, closeModal}){

    return (
        <>
            <Dialog className="relative z-50" open={isOpen} onClose={closeModal}>

                <div className="fixed inset-0 bg-outlay bg-opacity-25"/>

                <div className='fixed inset-0 flex items-center justify-center p-4'>

                
                
                <Dialog.Panel className="bg-background rounded-lg p-5 shadow">

                    <h1>Delete Address?</h1>
                    
                    <p>This will delete the current address PERMANENTLY.</p>

                    <button onClick={closeModal}>Delete</button>
                    <button onClick={closeModal}>Cancel</button>
                    
                </Dialog.Panel>
                </div>
            </Dialog>
        </>
    );
}