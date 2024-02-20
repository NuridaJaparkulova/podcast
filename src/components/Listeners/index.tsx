import { Swiper, SwiperSlide } from "swiper/react";
import style from "./Listeners.module.scss";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Platform from "../../assets/icons/platformListener.svg";

const Listeners = () => {
  const slides = [
    {
      image: Platform,
      id: 1,
    },
    {
      image: Platform,
      id: 2,
    },
    {
      image: Platform,
      id: 3,
    },
    {
      image: Platform,
      id: 4,
    },
    {
      image: Platform,
      id: 5,
    },
    {
      image: Platform,
      id: 6,
    },
  ];
  return (
    <div className={style.listeners}>
      <div className="container">
        <h1>What our listeners say</h1>
        <h3>Their experience throughout every platform</h3>
      </div>
      <div className={style.swiper_content}>
        <Swiper
          slidesPerView={2.5}
          spaceBetween={20}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          {slides.map((slide) => (
            <SwiperSlide className={style.swiper} key={slide.id}>
              <p className={style.quecly}>“</p>
              <h3>
                Lorem ipsum dolor sit amet consectet piscing elit, sed do
                eiusmod tempor incidi ut labore et dolore magna aliqua.{" "}
              </h3>
              <img src={slide.image} alt="img" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Listeners;
