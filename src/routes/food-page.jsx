import { FoodDisplayContent } from "../layouts/food-display-page";


export function FoodPage({title = "None"}){
    return (
        <div className="m-10">
            <h2 className="text-4xl m-5 font-bold text-center text-light-dark">{title}</h2>
            <hr className="mb-5"></hr>
            <FoodDisplayContent></FoodDisplayContent>
        </div>
    );
}