import { FoodItemComponent } from "../components/food-item";
import { PageNavigation } from "../components/page-navigate";


export function FoodDisplayContent(){
    return (

        <>
            <div className="w-full grid grid-cols-4 gap-4 p-2 mb-5">
                    <FoodItemComponent></FoodItemComponent>
                    <FoodItemComponent></FoodItemComponent>
                    <FoodItemComponent></FoodItemComponent>
                    <FoodItemComponent></FoodItemComponent>
                    <FoodItemComponent></FoodItemComponent>
                    <FoodItemComponent></FoodItemComponent>
                    <FoodItemComponent></FoodItemComponent>
                    <FoodItemComponent></FoodItemComponent>
            </div>

            <PageNavigation></PageNavigation>
        
        </>
        
    );
}