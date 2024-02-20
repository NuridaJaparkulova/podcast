import style from "./Footer.module.scss";
import PodcastLogo from "../../assets/icons/HeaderIcons/headerLogo.svg";
import { NavLink } from "react-router-dom";
import { IoLogoTwitter } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import Spotify from "../../assets/icons/SwiperBottomIcons/swiperBottomSpotify.svg";
import Google from "../../assets/icons/SwiperBottomIcons/swiperBottomGoogle.svg";
import YouTube from "../../assets/icons/SwiperBottomIcons/swiperBottomYouTube.svg";
import AppStore from "../../assets/icons/appStore.svg";
import GooglePlay from "../../assets/icons/googlePlay.svg";
export const Footer = () => {
  return (
    <div className={style.footer}>
      <div className="container">
        <div className={style.footer_content}>
          <div className={style.footer_content_left}>
            <div className={style.logo}>
              <img src={PodcastLogo} alt="PodcastLogo" />
              <p>©2021.</p>
            </div>
            <p className={style.logo_title}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className={style.socials}>
              <NavLink className={style.icon} to="/">
                <IoLogoTwitter title="Twitter" />
                <span className={style.icon_title}>Twitter</span>
              </NavLink>
              <NavLink className={style.icon} to="/">
                <FaInstagram title="Instagram" />
                <span className={style.icon_title}>Instagram</span>
              </NavLink>
              <NavLink className={style.icon} to="/">
                <FaTiktok title="TikTok" />
                <span className={style.icon_title}>TikTok</span>
              </NavLink>
            </div>
          </div>
          <div className={style.footer_content_center}>
            <div className={style.links}>
              <NavLink className={style.link} to="/">
                About
              </NavLink>
              <NavLink className={style.link} to="/">
                Testimonials
              </NavLink>
              <NavLink className={style.link} to="/">
                Features
              </NavLink>
            </div>
            <div className={style.links}>
              <NavLink className={style.link} to="/">
                Episodes
              </NavLink>
              <NavLink className={style.link} to="/">
                Pricing
              </NavLink>
              <NavLink className={style.link} to="/">
                Blog
              </NavLink>
            </div>
          </div>
          <div className={style.footer_content_right}>
            <div>
              <p>Listen to episodes on your fav platform:</p>
              <div className={style.platform}>
                <img src={Spotify} alt="Spotify" />
                <img src={Google} alt="Google" />
                <img src={YouTube} alt="YouTube" />
              </div>
              <div className={style.platformSecond}>
                <p className={style.link}>App available on:</p>
                <div className={style.platform_icons}>
                  <img src={AppStore} alt="AppStore" />
                  <img src={GooglePlay} alt="GooglePlay" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className={style.info}>
          <p className={style.title}>
            ©2022. All Rights Reserved. <span>Pod of Cast</span>
          </p>
          <p className={style.description}>Terms • Privacy</p>
        </div>
      </div>
    </div>
  );
};
