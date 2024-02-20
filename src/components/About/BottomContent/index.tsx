import style from "./BottomContent.module.scss";
import AboutBottomAvatar from "../../../assets/images/aboutBottomAvatar.jpg";
import SpotifyIcon from "../../../assets/icons/spotifyOnlyIcon.svg";
const BottomContent = () => {
  return (
    <div className={style.about_bottom}>
      <div className="container">
        <div className={style.bottom_content}>
          <p className={style.quotes}>“</p>
          <h2>
            One of the best daily podcasts that covers every topic on Spotify.
          </h2>
          <div className={style.manajerData}>
            <div className={style.avatar}>
              <div className={style.personData}>
                <img
                  className={style.avatarImage}
                  src={AboutBottomAvatar}
                  alt="AboutBottomAvatar"
                />
                <p className={style.name}>John Smith,</p>
              </div>
              <div className={style.position}>
                <img src={SpotifyIcon} alt="SpotifyIcon" />
                <h5>Social Community Manager</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomContent;
