import { Dialog } from "@headlessui/react";

export function OrderModal({ isOpen, closeModal }) {
    return (
        <Dialog className="relative z-50" open={isOpen} onClose={closeModal}>

            <div className='fixed top-0 right-0 flex items-center justify-center p-4'>
                <Dialog.Panel className="bg-white-100 h-[95vh] rounded-lg p-5 shadow me-5">
                    <OrderModalContent></OrderModalContent>
                </Dialog.Panel>
            </div>
        </Dialog>


    );
}

function OrderModalContent() {
    return (
        <div className="flex flex-col">
            <h1 className="font-bold text-center">Cart</h1>

            <div className="flex flex-col h-[28rem] overflow-y-auto mb-5">
                <OrderItem></OrderItem>
                <OrderItem></OrderItem>
                <OrderItem></OrderItem>
                <OrderItem></OrderItem>
                <OrderItem></OrderItem>
                <OrderItem></OrderItem>
            </div>

            <OrderPriceList></OrderPriceList>
        </div>
    );
}

function OrderItem({ itemName = "Food Item #1", itemPrice = "₱9999.99", quantity = "999" }) {
    return (
        <div className="w-full max-h-full shadow flex flex-row justify-start p-2">
            <img className="w-24 h-24 shadow rounded border-solid"></img>


            <div className="flex flex-col">

                <div className="flex flex-col ms-2 mb-2 mt-1">
                    <span className="text-left font-bold text-lg text-black-100">{itemName}</span>
                    <span className="text-left text-black-100">{itemPrice}</span>
                </div>

                <div className="flex flex-row ms-2">
                    <button className="m-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                        </svg>
                    </button>

                    <span className="text-black-100 m-1">{quantity}</span>

                    <button className="m-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                        </svg>
                    </button>

                    <button className="ms-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                        </svg>
                    </button>

                </div>

            </div>


        </div>
    );
}

function OrderPriceList() {
    return (
        <div className="flex flex-col">
            <span>Subtotal: $9999.99</span>
            <span>Discounts: $9999.99</span>
            <span>Delivery fee: $9999.99</span>
            <hr></hr>
            <span className="text-lg font-bold">Total Price: $9999.99</span>

            <div className="mb-2"></div>

            <button className="p-1 border shadow rounded-2xl border-black-100 text-black-100 hover:bg-black-100 hover:text-white-100">Checkout</button>
        </div>
    );
}