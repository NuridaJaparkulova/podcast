import style from "./PodcastSwiper.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import SwiperImg from "../../assets/images/coverSwiper.jpg";
import SwiperImgSecond from "../../assets/images/swiperSecondPhoto.jpg";
import SwiperImgThird from "../../assets/images/swiperThirdPhoto.jpg";
import SwiperImgFourth from "../../assets/images/swiperFourth.jpg";
import SwiperImgFifth from "../../assets/images/swiperFifth.jpg";
import SwiperImgSixth from "../../assets/images/swiperSixthjpg.jpg";
import GoogleIcon from "../../assets/icons/swiperGooglePodcast.svg";
import SpotifyIcon from "../../assets/icons/swiperSpotify.svg";
import YouTubeIcon from "../../assets/icons/swiperYouTube.svg";
import { SwiperBottomcontent } from "./Swiper/SwiperBottomContent";

export const PodcastSwiper = () => {
  const slides = [
    {
      image: SwiperImgFifth,
      title: "Self–confidence",
      id: 1,
    },
    {
      image: SwiperImgSecond,
      title: "Perplexed Mind",
      id: 2,
    },
    {
      image: SwiperImg,
      title: "Women’s Rights",
      id: 3,
    },
    {
      image: SwiperImgThird,
      title: "Social Class",
      id: 4,
    },
    {
      image: SwiperImgFourth,
      title: "Tesla Autopilot",
      id: 5,
    },
    {
      image: SwiperImgSixth,
      title: "Self–confidence",
      id: 6,
    },
  ];
  return (
    <div className={style.podcast_swiper}>
      {/* <div className="container"> */}
      <Swiper
        slidesPerView={4}
        spaceBetween={40}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {slides.map((swiper) => (
          <SwiperSlide key={swiper.id}>
            <img
              className={style.image}
              src={swiper.image}
              alt={swiper.title}
              width="373px"
              height="373px"
            />
            <div className={style.icons}>
              <img src={GoogleIcon} alt="googleIcon" />
              <img src={SpotifyIcon} alt="spotifyIcon" />
              <img src={YouTubeIcon} alt="youTubeIcon" />
            </div>
            <p className={style.title}>{swiper.title}</p>
          </SwiperSlide>
        ))}
      </Swiper>
      <SwiperBottomcontent />
      {/* </div> */}
    </div>
  );
};

export default PodcastSwiper;
