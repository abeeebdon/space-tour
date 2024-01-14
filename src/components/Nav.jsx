import { NavLink } from 'react-router-dom'
import { asideBlock } from '../data'

const Nav = () => {
  return (
    <nav>
      {asideBlock.map((aside, index) => {
        return (
          <NavLink to={aside.link} className="nav" key={aside.id}>
            <div className="nav">
              <p>{`0${index}`}</p>
              <p>{aside.name}</p>
            </div>
          </NavLink>
        )
      })}
    </nav>
  )
}
export default Nav
