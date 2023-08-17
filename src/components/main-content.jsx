import { FoodPage } from "../routes/food-page";
import { Home } from "../routes/home";
import { Order } from "../routes/order";
import { Profile } from "../routes/profile";

export function MainContent(){
    return (
      <main className='border border-solid w-screen'>

        <FoodPage></FoodPage>


      
      </main>
    );
}