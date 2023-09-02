import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { OrderItem } from './order-item'
import { FoodVariety } from './food-variety'

export function FoodModal({isOpen, setIsOpen, closeModal}) {

  return (
    <>
      <Dialog className="relative z-50" open={isOpen} onClose={closeModal}>

        <div className="fixed inset-0 bg-outlay bg-opacity-25"/>

        <div className='fixed inset-0 flex items-center justify-center p-4'>
          <Dialog.Panel className="bg-background rounded-lg p-5 shadow">            
            <div className='flex flex-row p-2'>
              <img className='w-36 h-36 shadow'></img>
              <div className='flex flex-col items-center ms-5'>
                <span className='font-bold'>Food Item #1</span>

              </div>
            </div>

            <div className='mb-2 mt-2 text-center font-bold'>Choose your flavor</div>
            <hr className='m-2 bg-black'></hr>
            
            <FoodVariety></FoodVariety>
            <FoodVariety></FoodVariety>
            <FoodVariety></FoodVariety>

            <div className='flex flex-row '>
              <div className='justify-items-center self-center space-x-1'>
                
                <button className="rounded-2xl shadow p-2 bg-color-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
                        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                    </svg>
                </button>

                <span className="">9999</span>

                <button className="rounded-2xl shadow p-2 bg-color-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                </button>

              </div>

              <div className='m-1'>
                <button className='bg-color-3 text-light-dark rounded-2xl shadow p-2 m-1 font-bold' onClick={closeModal}>Continue ₱1000</button>
                <button className='bg-color-3 text-error-color rounded-2xl shadow p-2 m-1 font-bold' onClick={closeModal}>Cancel</button>
              </div>
              
            </div>

            
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  )
}
