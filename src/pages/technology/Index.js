import { useState } from 'react'
import { technology } from '../../data'
import { useEffect } from 'react'

const Index = () => {
  const [tech, setTech] = useState('')
  // const [index, setIndex] = useState(0)

  useEffect(() => {
    const techs = technology[0]
    setTech(techs)
  }, [])
  const { id, name, details, image } = tech

  const handleTech = (id) => {
    technology.find((techie) => {
      if (techie.id === id) {
        return setTech(techie)
      }
    })
  }
  return (
    <section className="technology">
      <div className="head">
        <p>03</p>
        <h3>Space Launch 101</h3>
      </div>
      <article className="container" key={id}>
        <div className="image">
          <img src={image} alt="img" />
        </div>
        <div className="btn">
          {technology.map((tech) => {
            return (
              <button
                className={id === tech.id ? 'active' : 'inactive'}
                onClick={() => handleTech(tech.id)}
              >
                {tech.id}
              </button>
            )
          })}
        </div>
        <div className="text">
          <h4>role</h4>
          <h2>{name}</h2>
          <p>{details}</p>
        </div>
      </article>
    </section>
  )
}
export default Index
