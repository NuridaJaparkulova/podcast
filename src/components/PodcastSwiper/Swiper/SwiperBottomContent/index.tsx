import style from "./SwiperBottomContent.module.scss";
import Spotify from "../../../../assets/icons/SwiperBottomIcons/swiperBottomSpotify.svg";
import Google from "../../../../assets/icons/SwiperBottomIcons/swiperBottomGoogle.svg";
import YouTube from "../../../../assets/icons/SwiperBottomIcons/swiperBottomYouTube.svg";

export const SwiperBottomcontent = () => {
  return (
    <div className={`${"container"} ${style.swiper_bottom}`}>
      <hr />
      <div className={style.dFlex}>
        <h3>Supported by:</h3>
        <div>
          <img src={Spotify} alt="Spotify" />
        </div>
        <div>
          <img src={Google} alt="Google" />
        </div>
        <div>
          <img src={YouTube} alt="YouTube" />
        </div>
      </div>
      <hr />
    </div>
  );
};
