import { Home } from "../routes/home";
import { Order } from "../routes/order";
import { Profile } from "../routes/profile";

export function MainContent(){
    return (
      <main className='border border-solid w-screen'>

        <Profile></Profile>


      
      </main>
    );
}