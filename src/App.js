import { useState } from 'react'
import Header from './components/Header'
import Home from './pages/home/Index'
import Destination from './pages/destination/Index'
import Crew from './pages/crew/Index'
import Technology from './pages/technology/Index'
import Sidebar from './components/Sidebar'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  const [headerToggler, setHeaderToggler] = useState(false)

  const headerButton = () => {
    setHeaderToggler(!headerToggler)
  }
  return (
    <div className="App">
      <Header headerButton={headerButton} headerToggler={headerToggler} />
      {/* the headerToggler is controlled by the button in the header component
     from the headerButton here if the headerToggler is true the sideBAr is shown*/}
      {headerToggler && (
        <div className="aside-container">
          <Sidebar setHeaderToggler={setHeaderToggler} />
        </div>
      )}
      <Routes>
        <Route index element={<Home />} />
        <Route path="destination" element={<Destination />} />
        <Route path="crew" element={<Crew />} />
        <Route path="technology" element={<Technology />} />
      </Routes>
    </div>
  )
}
export default App
