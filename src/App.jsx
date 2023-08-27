import { NavigationBar } from './layouts/navigation-bar'
import { SideBar } from './layouts/side-bar'
import { MainContent } from './layouts/main-content'

function App() {

  return (
    <div className='container max-w-max'>

      <NavigationBar></NavigationBar>

      <div className='flex flex-row'>
        <SideBar></SideBar>
        <MainContent></MainContent>
      </div>


      
    </div>

  )
}

export default App
