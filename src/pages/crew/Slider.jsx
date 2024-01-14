import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'

import 'swiper/css/bundle'

const Slider = ({ crew }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <>
        {crew.map((person) => {
          const { name, img, role, details, id } = person
          console.log(name)
          console.log(id)
          return (
            <SwiperSlide>
              <div key={id}>
                <p style={{ textAlign: 'center' }}>{name}</p>
              </div>
            </SwiperSlide>
          )
        })}
      </>
    </Swiper>
  )
}
export default Slider
