import { Dialog } from "@headlessui/react";

export function BaseModal({children, modalConfiguration}){

    return (

    <>
      <Dialog className="relative z-50" open = {modalConfiguration.open} onClose={modalConfiguration.onClose} >

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