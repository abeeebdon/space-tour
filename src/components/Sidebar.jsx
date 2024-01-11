import { NavLink } from 'react-router-dom'
import { asideBlock } from '../data'
const Sidebar = () => {
  return (
    <aside>
      {asideBlock.map((aside, index) => {
        return (
          <NavLink to={aside.link}>
            <div className="aside" key={aside.id}>
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
