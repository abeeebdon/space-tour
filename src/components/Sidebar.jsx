import { NavLink } from 'react-router-dom'
import { asideBlock } from '../data'
const Sidebar = ({ setHeaderToggler }) => {
  const handleAsideBtn = () => {
    setHeaderToggler(false)
  }
  return (
    <aside onMouseLeave={() => handleAsideBtn()}>
      {asideBlock.map((aside, index) => {
        return (
          <NavLink to={aside.link} key={aside.id}>
            <div className="aside" onClick={() => handleAsideBtn()}>
              <p>{`0${index}`}</p>
              <p>{aside.name}</p>
            </div>
          </NavLink>
        )
      })}
    </aside>
  )
}
export default Sidebar
