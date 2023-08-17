import { NavigationBar } from './components/navigation-bar'
import { SideBar } from './components/side-bar'
import { MainContent } from './components/main-content'

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
