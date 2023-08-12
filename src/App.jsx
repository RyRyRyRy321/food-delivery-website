import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FoodItemComponent } from './food-item'

function App() {

  return (
    <div className='container border border-solid max-w-max'>
      <nav className='nav-bar h-20 border border-solid'>
      
      </nav>

      <div className='flex flex-row'>

        <div className='side-bar border border-solid h-screen w-2/12'></div>

        
        <main className='border border-solid w-screen'>

          <div className=''></div>
          <div className="flex justify-center">

            <div className="w-full grid grid-cols-4 gap-5 m-2">
                <FoodItemComponent></FoodItemComponent>
                <FoodItemComponent></FoodItemComponent>
                <FoodItemComponent></FoodItemComponent>
                <FoodItemComponent></FoodItemComponent>

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


          

        </main>

      </div>

      

    </div>

  )
}

export default App
