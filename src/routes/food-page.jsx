import { FoodItemComponent } from "../components/food-item";


export function FoodPage({title = "None"}){
    return (
        <div>
            <h2 className="text-4xl m-5 font-bold">{title}</h2>
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
    );
}