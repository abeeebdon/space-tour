import { useState } from 'react'
import { destination } from '../../data'
import { useEffect } from 'react'
const Index = () => {
  const [destinations, setDestinations] = useState([])
  const handleBtnDestination = (id) => {
    const alldestination = destination.find((destin) => destin.id == id)
    setDestinations(alldestination)
  }
  useEffect(() => {
    const alldestination = destination.find((destin) => destin.id == 1)
    setDestinations(alldestination)
  }, [])
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
        <div className="flex-2">
          <div className="btn-container">
            {destination.map((btn) => {
              const { id, title } = btn
              return (
                <button key={id} onClick={() => handleBtnDestination(id)}>
                  {title}
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
