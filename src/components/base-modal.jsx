import { Dialog } from "@headlessui/react";

export function BaseModal({children, open, onClose}){

    return (

    <>
      <Dialog className="relative z-50" open = {open} onClose={onClose} >

        <div className="fixed inset-0 bg-black-200 bg-opacity-25"/>

        <div className='fixed inset-0 flex items-center justify-center'>
          <Dialog.Panel className="bg-white-100 rounded-lg p-5 shadow">            
            {children}
          </Dialog.Panel>
        </div>
        
      </Dialog>
    </>
        
    );
}