import { FoodItemComponent } from "../components/food-item";


export function FoodPage({title = "None"}){
    return (
        <div className="m-10">
            <h2 className="text-4xl m-5 font-bold text-center text-light-dark">{title}</h2>
            <hr className="mb-5"></hr>
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
    );
}