import img from '../assets/icon.png'
import useWindowSize from '../hooks/useWindowSize'
import Nav from './Nav'
import { FaBars, FaTimes } from 'react-icons/fa'
const Header = ({ headerButton, headerToggler }) => {
  const { width } = useWindowSize()
  return (
    <header>
      <img src={img} alt="logo" />
      {/* if width is less than 650, a  hamburger icon will be shown and it will change to crossBar using the 'state' headerToggler otherwise a nva component is rendered*/}
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
