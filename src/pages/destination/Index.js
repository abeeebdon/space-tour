import { useState } from 'react'
import { destination } from '../../data'
const Index = () => {
  const [destinations, setDestinations] = useState('')
  const [index, setIndex] = useState(0)
  const [stopAnimate, setStopAnimate] = useState(false)

  //handleBtn is a click event that don has an id passed in
  const handleBtnDestination = (id) => {
    const alldestination = destination.find((destin) => destin.id === id)
    setDestinations(alldestination)
    setStopAnimate(true)
  }
  const animate = () => {
    const newIndex = (index + 1) % destination.length
    setIndex(newIndex)
    const single = destination[index]
    setDestinations(single)
  }
  if (!stopAnimate) {
    setTimeout(animate, 3000)
  }
  setTimeout(() => {
    setStopAnimate(false)
  }, 5000)

  const { title, text, id, distance, time, image } = destinations

  return (
    <section className="destination">
      <div className="head">
        <p>01</p>
        <h3>Pick your destination</h3>
      </div>
      <div className="flex">
        <div className="image">
          <img src={image} alt="img" />
        </div>
        <div>
          <div className="btn-container">
            {destination.map((btn) => {
              return (
                <button
                  key={btn.id}
                  className={btn.id === id ? 'active' : 'inactive'}
                  onClick={() => handleBtnDestination(btn.id)}
                >
                  {btn.title}
                </button>
              )
            })}
          </div>
          <div>
            <div key={id}>
              <div className="outlet">
                <h2>{title}</h2>
                <p>{text}</p>
              </div>
              <hr style={{ color: 'red' }} />
              <div className="distance">
                <div className="cont">
                  <p>AVG, DISTANCE</p>
                  <h3>{distance}</h3>
                </div>
                <div className="cont">
                  <p>EST. TRAVEL TIME</p>
                  <h3>{time}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Index
