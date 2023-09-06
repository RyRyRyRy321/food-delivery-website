import { FoodDisplayContent } from "../layouts/food-display-page";


export function Home(){
    return(
        <div className="w-10/12">
            <div className="flex justify-center">
                <div className="carousel shadow w-full rounded-2xl h-72 mt-5 mb-5">

                </div>
            </div>

          <FoodDisplayContent></FoodDisplayContent>
        </div>
    )
}