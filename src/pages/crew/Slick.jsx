import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

import Card from './Card'

const Slick = ({ crew }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div>
      <Slider {...settings}>
        {crew.map((person) => {
          return (
            <article className="crew-item" style={{ position: 'relative' }}>
              <div className="image">
                <img src={person.image} alt={person.id} />
              </div>
              <Card person={person} />
            </article>
          )
        })}
      </Slider>
    </div>
  )
}
export default Slick
