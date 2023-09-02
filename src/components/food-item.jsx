import { FoodModal } from "./food-modal";
import { useState } from "react";


export function FoodItemComponent({img_link = "https://image-placeholder.com/images/actual-size/1920x1080.png", foodTitle = "Default Title", foodPrice = "₱100.0"}){
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
      setIsOpen(false)
    }
  
    function openModal() {
      setIsOpen(true)
    }    

    return (
            <>
                <div className='max-w-sm shadow rounded-2xl flex flex-col shadow cursor-pointer' onClick={openModal}>

                    <img className='w-full h-full object-cover rounded-t-2xl' src = {img_link} ></img>    
                    
                    <div className="flex flex-row">
                        <div className='w-full h-24 flex flex-col items-start'>
                            <span className='ms-3 mt-2 text-light-dark text-xl font-bold'>{foodTitle}</span>
                            <span className='ms-3 mt-3 text-base font-bold text-color-3'>{foodPrice}</span>
                        </div>
                    </div>
                    
                </div>

                <FoodModal isOpen={isOpen} setIsOpen={openModal} closeModal={closeModal}></FoodModal>
            </>

       
    )
}