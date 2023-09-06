import { FoodItemComponent } from "../components/foodItem-card";
import { PageNavigation } from "../components/page-navigate";


export function FoodDisplayContent(){
    return (

        <>
            <div className="flex flex-row justify-center">
                <div className="grid grid-cols-4 gap-4 p-2 mb-5 ">
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
            

            <PageNavigation></PageNavigation>
        
        </>
        
    );
}