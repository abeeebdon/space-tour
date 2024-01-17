import { useEffect, useState } from 'react'
import { crew } from '../../data'

const Index = () => {
  const [singleCrew, setSingleCrew] = useState('')
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const animate = () => {
      const newIndex = (index + 1) % crew.length
      setIndex(newIndex)
    }
    const single = crew[index]
    setSingleCrew(single)
    clearInterval(setTimeout(animate, 3000))
  }, [index])
  const { id, image, name, role, details } = singleCrew
  const handleBtn = (id) => {
    crew.find((person) => {
      if (person.id === id) {
        return setSingleCrew(person)
      }
      return false
    })
  }
  return (
    <section className="crew">
      <div className="head">
        <p>02</p>
        <h3>meet your crew</h3>
      </div>
      <article className="crew-item">
        <div className="image">
          <img src={image} alt={id} />
        </div>
        <div className="btn">
          {crew.map((button) => {
            return (
              <button
                key={button.id}
                className={id === button.id ? 'active' : 'inactive'}
                onClick={() => handleBtn(button.id)}
              ></button>
            )
          })}
        </div>
        <div className="text">
          <div className="text">
            <h4>{role}</h4>
            <h2>{name}</h2>
            <p>{details}</p>
          </div>
        </div>
      </article>
    </section>
  )
}
export default Index
