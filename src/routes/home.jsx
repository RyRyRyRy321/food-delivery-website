import { FoodItemComponent } from "../components/food-item";


export function Home(){
    return(
        <div className="m-10">
            <div className="flex justify-center">
                <div className="carousel w-full rounded-2xl border border-solid h-72 mt-5 mb-5">

                </div>
            </div>

          


          <div className="w-full grid grid-cols-4 gap-10 p-2">
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