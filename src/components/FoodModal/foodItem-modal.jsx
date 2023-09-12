import { Dialog, Transition } from '@headlessui/react'
import { BaseModal } from '../base-modal';
import { BsDashCircle, BsPlusCircle } from "react-icons/bs";

export function FoodItemModal({ isOpen, closeModal }) {


  return (
    <BaseModal open={isOpen}
      onClose={closeModal}
      children={<FoodItemContent continueFunction={closeModal} closeFunction={closeModal}></FoodItemContent>}></BaseModal>
  )
}

function FoodItemContent({ continueFunction, closeFunction }) {
  return (
    <div className='flex flex-col justify-center justify-items-center'>
      <FoodItemHeaderModal></FoodItemHeaderModal>
      <FoodItemBodyModal></FoodItemBodyModal>
      <FoodItemFooterModal continueFunction={continueFunction} closeFunction={closeFunction}></FoodItemFooterModal>
    </div>
  );
}

function FoodItemHeaderModal() {
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
    <div className='m-2'>
      <div className='mb-2 mt-2 text-center font-bold text-black-100'>Choose your flavor</div>
      <hr className='m-2 bg-black'></hr>
      <div className='h-80 overflow-y-auto p-1 space-y-1'>
        <FoodVarietyModal></FoodVarietyModal>
        <FoodVarietyModal></FoodVarietyModal>
        <FoodVarietyModal></FoodVarietyModal>
      </div>


    </div>

  );
}

function FoodItemFooterModal({ continueFunction, closeFunction }) {
  return (
    <div className=' flex flex-row m-1 space-x-2'>

      <div className='justify-items-center self-center space-x-2'>

        <button>
          <BsDashCircle className='text-black-100'></BsDashCircle>
        </button>

        <span className="text-black-100">9999</span>

        <button>
          <BsPlusCircle className='text-black-100'></BsPlusCircle>
        </button>

      </div>

      <button className='p-2 border shadow rounded-2xl border-black-100 text-black-100 hover:bg-black-100 hover:text-white-100' onClick={continueFunction}>Continue ₱1000</button>
      <button className='p-2 border shadow rounded-2xl border-black-100 text-black-100 hover:bg-black-100 hover:text-white-100' onClick={closeFunction}>Cancel</button>
    </div>

  )
}

function FoodVarietyModal({ itemName = "Food Item #1", itemPrice = "₱9999.99", quantity = "999" }) {
  return (
    <div className="flex flex-row">
      <img className="w-24 h-24 rounded shadow"></img>

      <div className="flex flex-col">
        <div className="flex flex-col ms-7 mb-1 mt-1">
          <span className="text-left font-bold text-lg text-black-100">{itemName}</span>
          <span className="text-left text-black-100">{itemPrice}</span>
        </div>

        <div className="flex flex-row ms-7 space-x-2">

          <button>
            <BsDashCircle className='text-black-100'></BsDashCircle>
          </button>

          <span className="text-black-100">{quantity}</span>

          <button>
            <BsPlusCircle className='text-black-100'></BsPlusCircle>
          </button>

        </div>

      </div>
    </div>
  );
}