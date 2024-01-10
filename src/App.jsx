import Header from './components/Header'
import Home from './pages/home/index'

const App = () => {
  const headerIcon = () => {}
  return (
    <div className="App">
      <Header headerIcon={headerIcon} />
      <Home />
    </div>
  )
}
export default App
