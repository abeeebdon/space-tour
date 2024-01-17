import img from '../assets/icon.png'
import useWindowSize from '../hooks/useWindowSize'
import Nav from './Nav'
import { FaBars, FaTimes } from 'react-icons/fa'
const Header = ({ headerButton, headerToggler }) => {
  const { width } = useWindowSize()
  return (
    <header>
      <img src={img} alt="logo" />
      {width <= 650 ? (
        <button className="icon-btn" onClick={() => headerButton()}>
          {headerToggler ? (
            <FaTimes className="icon" />
          ) : (
            <FaBars className="icon" />
          )}
        </button>
      ) : (
        <div className="nav">
          <Nav />
        </div>
      )}
    </header>
  )
}
export default Header
