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
                        <h1 className='text-center font-bold'>Update Address</h1>
                    

                    <form className='flex flex-col' onSubmit={handleSubmit} >
                        <input className = 'm-1 p-2 w-96' type='text' placeholder='No. (Include Building Name)'></input>
                        <input className = 'm-1 p-2 w-96' type='text' placeholder='Street'></input>
                        <input className = 'm-1 p-2 w-96' type='text' placeholder='Barangay/Subdivision'></input>
                        <input className = 'm-1 p-2 w-96' type='text' placeholder='District/Municipality'></input>
                        <input className = 'm-1 p-2 w-96' type='text' placeholder='City/Province'></input>
                        
                        <button type='submit'>Update</button>
                        <button onClick={closeModal}>Cancel</button>
                    </form>
                    </div> 
                </Dialog.Panel>
                </div>
            </Dialog>
        </>
    );
}