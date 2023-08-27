import { OrderItem } from "../components/order-item";


export function Order(){

    return(

    <>
        <div className="columns-2">
            <OrderItem></OrderItem>
            <OrderItem></OrderItem>
            <OrderItem></OrderItem>
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
                <span className="text-lg font-bold">Total Price: $9999.99</span>
                <hr></hr>
                <button className="w-24">Checkout</button>
            </div>

            
        </div>
    </>

    );
    
}