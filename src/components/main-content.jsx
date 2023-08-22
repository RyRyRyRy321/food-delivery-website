import { useState } from "react";
import { FoodPage } from "../routes/food-page";
import { Home } from "../routes/home";
import { Order } from "../routes/order";
import { Profile } from "../routes/profile";
import { FoodModal } from "./food-modal";

export function MainContent(){

    const [open, setOpen] = useState(false);

    const openModal = () => {
      setOpen(true);
    }

    const closeModal = () => {
      setOpen(false);
    }

  return (
    <main className='border border-solid w-screen'>

      <FoodModal></FoodModal>
      <FoodPage></FoodPage>
    
    </main>
  );
}