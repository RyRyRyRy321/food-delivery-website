import { useState } from "react";
import { FoodPage } from "../routes/food-page";
import { Home } from "../routes/home";
import { Order } from "../routes/order";
import { Profile } from "../routes/profile";
import { FoodModal } from "../components/food-modal";

export function MainContent(){

  return (
    <main className='border border-solid w-screen'>

      <Profile></Profile>
    
    </main>
  );
}