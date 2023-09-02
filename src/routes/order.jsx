import { OrderItem } from "../components/order-item";


export function Order(){

    return(

    <div className="p-3">
        <div className="columns-1">
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

    );
    
}