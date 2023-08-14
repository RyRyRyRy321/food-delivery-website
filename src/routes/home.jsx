import { FoodItemComponent } from "../components/food-item";


export function Home(){
    return(
        <div>
            <div className="flex justify-center">
                <div className="carousel w-11/12 border border-solid h-72 mt-5 mb-5">

                </div>
            </div>

          


          <div className="w-full grid grid-cols-4 gap-4 p-2">
              <FoodItemComponent></FoodItemComponent>
              <FoodItemComponent></FoodItemComponent>
              <FoodItemComponent></FoodItemComponent>
              <FoodItemComponent></FoodItemComponent>

              <FoodItemComponent></FoodItemComponent>
              <FoodItemComponent></FoodItemComponent>
              <FoodItemComponent></FoodItemComponent>
              <FoodItemComponent></FoodItemComponent>

          </div>
        </div>
    )
}