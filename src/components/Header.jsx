import img from '../assets/icon.png'
import { FaBars } from 'react-icons/fa'
const Header = ({ headerIcon }) => {
  return (
    <header>
      <img src={img} alt="logo" />
      <FaBars className="icon" onClick={() => headerIcon()} />
    </header>
  )
}
export default Header
