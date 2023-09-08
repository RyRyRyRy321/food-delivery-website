
export function FoodVarietyModal({itemName = "Food Item #1", itemPrice = "₱9999.99", quantity = "999"}){
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