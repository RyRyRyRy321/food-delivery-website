import { Dialog, Transition } from '@headlessui/react'

export function FoodItemModal({isOpen, closeModal}) {

  return (
    <>
      <Dialog className="relative z-50" open={isOpen} onClose={closeModal}>

        <div className="fixed inset-0 bg-black-200 bg-opacity-25"/>

        <div className='fixed inset-0 flex items-center justify-center p-4'>
          <Dialog.Panel className="bg-white-100 rounded-lg p-5 shadow">            
            <FoodItemHeaderModal></FoodItemHeaderModal>
            <FoodItemBodyModal></FoodItemBodyModal>
            <FoodItemFooterModal continueFunction={closeModal} closeFunction={closeModal}></FoodItemFooterModal>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  )
}

function FoodItemHeaderModal(){
  return (
      <div className='flex flex-row p-2'>
          <img className='w-36 h-36 shadow'></img>
          <div className='flex flex-col items-center ms-5'>
          <span className='font-bold text-black-100'>Food Item #1</span>

          </div>
      </div>
  );
}

function FoodItemBodyModal() {
  return (
      <>
          <div className='mb-2 mt-2 text-center font-bold text-black-100'>Choose your flavor</div>
          <hr className='m-2 bg-black'></hr>

          <FoodVarietyModal></FoodVarietyModal>
          <FoodVarietyModal></FoodVarietyModal>
          <FoodVarietyModal></FoodVarietyModal>
      </>

  );
}

function FoodItemFooterModal({continueFunction, closeFunction}) {
  return (
      <div className='flex flex-row '>
          <div className='justify-items-center self-center space-x-2'>

              <button className="rounded-2xl shadow p-2 bg-color-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
                      <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                  </svg>
              </button>

              <span>9999</span>

              <button className="rounded-2xl shadow p-2 bg-color-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                  </svg>
              </button>

          </div>

          <div className='m-1'>
              <button className='bg-color-3 text-black-100 rounded-2xl shadow p-2 m-1' onClick={continueFunction}>Continue ₱1000</button>
              <button className='bg-error text-black-100 rounded-2xl shadow p-2 m-1' onClick={closeFunction}>Cancel</button>
          </div>

      </div>
  )
}

function FoodVarietyModal({itemName = "Food Item #1", itemPrice = "₱9999.99", quantity = "999"}){
  return (
      <div className="flex flex-row m-2">
          <img className="w-24 h-24 rounded shadow"></img>

          <div className="flex flex-col">
              <div className="flex flex-col ms-7 mb-1 mt-1">
                  <span className="text-left font-bold text-lg text-black-100">{itemName}</span>
                  <span className="text-left text-black-100">{itemPrice}</span>
              </div>

              <div className="flex flex-row ms-7 space-x-2">

                  <button className="rounded-2xl shadow p-2 bg-color-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
                      <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                  </svg>
              </button>

              <span className="text-black-100">{quantity}</span>

              <button className="rounded-2xl shadow p-2 bg-color-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                  </svg>
              </button>

              </div>

          </div>
      </div>
  );
}