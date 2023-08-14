import './App.css'
import { FoodItemComponent } from './food-item'

function App() {

  return (
    <div className='container border border-solid max-w-max'>
      <nav className='nav-bar w-full h-20 border border-solid'>
        <div className="h-full flex flex-row justify-between items-center">
        
        <img className='w-14 h-14 rounded-full ms-12 me-10 border'></img>
        
        <ul className='list-none flex flex-row items-center me-auto'>
          <li>
            <a className='m-2 font-bold' href=''>Home</a>
          </li>

          <li>
            <a className='m-2 font-bold' href=''>Menu</a>
          </li>  
        </ul>

        <ul className='list-none flex flex-row-reverse items-center '>
          <li>
            <a className='me-5 font-bold' href=''>Log In</a>
          </li> 
        </ul>

        

        </div>
        
        


      </nav>

      <div className='flex flex-row'>
        <div className='side-bar border border-solid h-full w-2/12 '>
          <ul className='list-none flex flex-col p-2'>
            <li>
              <a>Best Deals</a>
            </li>

            <li>
              <a>Breakfast</a>
            </li>

            <li>
              <a>Appetizers</a>
            </li>

            <li>
              <a>Drinks</a>
            </li>
          </ul>
        </div>


        
        <main className='border border-solid w-screen'>

          <div className="flex justify-center">
            <div className="carousel w-11/12 border border-solid h-72 mt-5 mb-5">

            </div>
          </div>

          


          <div className="w-full grid grid-cols-4 gap-4 p-2">
              <FoodItemComponent></FoodItemComponent>
              <FoodItemComponent></FoodItemComponent>
              <FoodItemComponent></FoodItemComponent>
              <FoodItemComponent></FoodItemComponent>

              <FoodItemComponent></FoodItemComponent>
              <FoodItemComponent></FoodItemComponent>
              <FoodItemComponent></FoodItemComponent>
              <FoodItemComponent></FoodItemComponent>

          </div>


          
      
        </main>

      </div>

      

    </div>

  )
}

export default App
