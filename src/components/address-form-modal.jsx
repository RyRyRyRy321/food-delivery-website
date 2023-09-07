import { Dialog } from '@headlessui/react'

export function AddressFormModal({isOpen, closeModal}){

    const handleSubmit = (event) => {
        event.preventDefault();
        closeModal();
    }

    return (
        <>
            <Dialog className="relative z-50" open={isOpen} onClose={closeModal}>

                <div className="fixed inset-0 bg-outlay bg-opacity-25"/>

                <div className='fixed inset-0 flex items-center justify-center p-4'>

                
                
                <Dialog.Panel className="bg-background rounded-lg p-5 shadow">

                    <div className='flex flex-col'>
                        <input className='p-2 rounded' type = 'text' placeholder='Receiver name'></input>

                        <h1 className='m-1 font-bold'>Address</h1>
                    <form onSubmit={handleSubmit} >
                        <div className='grid grid-cols-3 gap-2'>
                            <input className = 'p-2 rounded' type='text' placeholder='Building No.'></input>
                            <input className = 'p-2 rounded' type='text' placeholder='Street'></input>
                            <input className = 'p-2 rounded' type='text' placeholder='Barangay/Subdivision'></input>
                            <input className = 'p-2 rounded' type='text' placeholder='District/Municipality'></input>
                            <input className = 'p-2 rounded' type='text' placeholder='City/Province'></input>
                        </div>
                        <div className='flex flex-row space-x-2 mt-2 justify-end'>
                            <button className=' p-1 border rounded' type='submit'>Update</button>
                            <button className=' p-1 border rounded' onClick={closeModal}>Cancel</button>
                        </div>
                        
                    </form>
                    </div> 
                </Dialog.Panel>
                </div>
            </Dialog>
        </>
    );
}