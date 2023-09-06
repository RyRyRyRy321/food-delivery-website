import { NavigationBar } from './layouts/navigation-bar'
import { SideBar } from './layouts/side-bar'
import { MainContent } from './layouts/main-content'
import { Footer } from './layouts/footer'

function App() {

  return (
    <div className='container max-w-max'>

      <NavigationBar></NavigationBar>

      <div className='flex flex-row'>
        <MainContent></MainContent>
      </div>

      <Footer></Footer>
      
    </div>

  )
}

export default App
