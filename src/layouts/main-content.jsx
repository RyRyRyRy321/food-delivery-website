import { useState } from "react";
import { FoodPage } from "../routes/food-page";
import { Home } from "../routes/home";
import { Order } from "../routes/order";
import { Profile } from "../routes/profile";
import { FoodModal } from "../components/food-modal";
import { Outlet } from "react-router-dom";

export function MainContent(){

  return (
    <main className='bg-background w-screen'>
      <Outlet></Outlet>
    </main>
  );
}