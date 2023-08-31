
export function FoodItemComponent({img_link = "https://image-placeholder.com/images/actual-size/1920x1080.png", foodTitle = "Default Title", foodPrice = "₱100.0"}){
    return (

            <div className='max-w-sm shadow border rounded-2xl border-solid flex flex-col-reverse shadow'>
                <div className='w-full h-24 flex flex-col items-start'>
                    <span className='m-1 text-light-dark text-xl font-bold'>{foodTitle}</span>
                    <span className='m-1 text-base text-light-dark font-semibold'>{foodPrice}</span>
                </div>
            
                <hr></hr>
            
                <img className='w-full h-full object-cover rounded-t-2xl' src = {img_link} ></img>    
            </div>
       
    )
}