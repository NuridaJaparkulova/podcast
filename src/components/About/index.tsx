import style from "./About.module.scss";
import LeftImage from "../../assets/icons/AboutComponentIcons/aboutComponentLeft.svg";
import RightImage from "../../assets/icons/AboutComponentIcons/aboutComponentRight.svg";
import BottomContent from "./BottomContent";

const AboutComponent = () => {
  return (
    <div className={style.about}>
      <div className="container">
        <div className={style.about_title}>
          <h2>Talk. Listen. Get inspired by every minute of it.</h2>
        </div>
        <div className={style.about_content}>
          <div className={style.content}>
            <img src={LeftImage} alt="leftImage" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac ultrices odio.{" "}
            </p>
          </div>
          <div className={style.content}>
            <img src={RightImage} alt="leftImage" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac ultrices odio.{" "}
            </p>
          </div>
        </div>
        <BottomContent />
      </div>
    </div>
  );
};

export default AboutComponent;
