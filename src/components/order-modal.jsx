import { Dialog } from "@headlessui/react";
import { OrderItem } from "./order-item";


export function OrderModal({isOpen, closeModal}){
    return (
        <Dialog className="relative z-50" open={isOpen} onClose={closeModal}>

            <div className='fixed overflow-y-auto top-0 right-0 flex items-center justify-center p-4'>
        
            <Dialog.Panel className="bg-white-100 h-[95vh] overflow-y-auto rounded-lg p-5 shadow me-5">            
                <div className="flex flex-col">
                    <h1 className="font-bold text-center">Orders</h1>
                
                <div className="columns-1 ">
                    <OrderItem></OrderItem>
                    <OrderItem></OrderItem>
                    <OrderItem></OrderItem>
                    <OrderItem></OrderItem>
                    <OrderItem></OrderItem>
                    <OrderItem></OrderItem>
                </div>

                <div>
                    <div className="flex flex-col">
                        <span>Subtotal: $9999.99</span>
                        <span>Discounts: $9999.99</span>
                        <span>Delivery fee: $9999.99</span>
                        <hr></hr>
                        <span className="text-lg font-bold">Total Price: $9999.99</span>
                        
                        <button className="w-24 border rounded drop-shadow border-radius">Checkout</button>
                    </div>

                    
                </div>

                </div>
            </Dialog.Panel>


            </div>
        </Dialog>


    );
}