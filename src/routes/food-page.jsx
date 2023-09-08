import { FoodDisplayContent } from "../layouts/food-display-page";


export function FoodPage({title = "None"}){
    return (
        <div className=" w-10/12 flex flex-col justify-center">
            <h2 className="text-4xl m-5 font-bold text-center text-black-100">{title}</h2>
            <hr className="mb-5"></hr>
            <FoodDisplayContent></FoodDisplayContent>
        </div>
    );
}