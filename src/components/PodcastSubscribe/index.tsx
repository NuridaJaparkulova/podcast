import { Button } from "../../UI/Button";
import style from "./PodcastSubscribe.module.scss";
import Line from "../../assets/icons/podcastSubscribeLine.svg";

const PodcastSubscribe = () => {
  return (
    <>
      <section className={style.podcast}>
        <div className="container">
          <div className={style.podcast_content}>
            <img className={style.line_svg} src={Line} alt="line" />
            <h1>
              Your Daily <span>Podcast</span>
            </h1>
            <p>We cover all kinds of categories and a weekly special guest.</p>
            <Button className={style.button}>SUBSCRIBE</Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default PodcastSubscribe;
