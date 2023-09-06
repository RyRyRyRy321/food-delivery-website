import { Outlet } from "react-router-dom";

export function MainContent(){

  return (
    
    <main className='flex justify-center bg-background w-screen p-5'>
      <Outlet></Outlet>
    </main>


  );
}