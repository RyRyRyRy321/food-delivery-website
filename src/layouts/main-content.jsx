import { Outlet } from "react-router-dom";

export function MainContent(){

  return (
    
    <main className='bg-background w-screen'>
      <Outlet></Outlet>
    </main>


  );
}