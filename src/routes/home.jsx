import { FoodItemComponent } from "../components/food-item";
import { FoodDisplayContent } from "../layouts/food-display-page";


export function Home(){
    return(
        <div className="m-10">
            <div className="flex justify-center">
                <div className="carousel shadow w-full rounded-2xl h-72 mt-5 mb-5">

                </div>
            </div>

          <FoodDisplayContent></FoodDisplayContent>
        </div>
    )
}