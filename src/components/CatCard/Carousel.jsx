import s from './Carousel.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Pagination, Navigation, Lazy, Virtual } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/lazy'

function Carousel ({ items }) {
  return (
    !items
      ? null
      : <Swiper
        virtual={true}
        style={{
          '--swiper-navigation-color': 'red',
          '--swiper-pagination-color': 'red'
        }}
        modules={[Pagination, Navigation, Lazy, Virtual]}
        lazy={true}
        pagination={true}
        navigation={items.length > 1}
        // loop={true}
        className={s.carousel}
        slidesPerView={1}
      >
        {items.map((item, index) => (
          <SwiperSlide className={s.slide} key={item._id} virtualIndex={index}>
            {item.tags.includes('gif')
              ? <img className={'swiper-lazy'} data-src={`https://cataas.com/cat/${item._id}`}/>
              : <img className={'swiper-lazy'} data-src={`https://cataas.com/cat/${item._id}?height=400`}/>
            }
            <div className="swiper-lazy-preloader swiper-lazy-preloader-black"></div>
          </SwiperSlide>
        ))}
      </Swiper>
  )
}

export default Carousel
