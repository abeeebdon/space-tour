import { register } from 'swiper/element/bundle'
// register Swiper custom elements
register()

const Swiper = ({ crew }) => {
  return (
    <Swiper-container
      navigation="true"
      pagination="true"
      scrollbar="true"
      slides-per-view="1"
      speed="500"
      loop="true"
    >
      {crew.map((person) => {
        return (
          <article className="crew-item" style={{ position: 'relative' }}>
            <div className="image">
              <img src={person.image} alt={person.id} />
            </div>
          </article>
        )
      })}
    </Swiper-container>
  )
}
export default Swiper
