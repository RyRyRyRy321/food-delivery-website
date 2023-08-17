import { NavigationBarList } from "./nav-bar-list";

export function NavigationBar(){
    return (
    <nav className='nav-bar w-full h-20 border border-solid sticky top-0'>
        <div className="h-full flex flex-row justify-between items-center">
        
        <img className='w-14 h-14 rounded-full ms-7 me-10 border'></img>
        
        <ul className='list-none flex flex-row items-center me-auto'>
          <NavigationBarList name="Menu"></NavigationBarList>
        </ul>

        <ul className='list-none flex flex-row items-center '>

          <li className="me-6">
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-cart " viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
              </svg>
            </button>
          </li>
          <li>
            <a className='me-12 font-bold' href=''>Log In</a>
          </li> 
        </ul>

        

        </div>
    </nav>
    );
}