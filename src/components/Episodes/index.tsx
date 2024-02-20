import style from "./Episodes.module.scss";
import FirstCard from "../../assets/images/swiperSixthjpg.jpg";
import SecondCard from "../../assets/images/swiperFifth.jpg";
import ThirdCard from "../../assets/images/swiperFourth.jpg";
import FourthCard from "../../assets/images/swiperSecondPhoto.jpg";
import FifthCard from "../../assets/images/swiperFifth.jpg";
import SixthCard from "../../assets/images/swiperThirdPhoto.jpg";
import Hosted from "../../assets/icons/episodes.svg";
import { Button } from "../../UI/Button";
const Episodes = () => {
  const cards = [
    {
      id: 1,
      image: FirstCard,
      text: "Eps. 6",
      title: "Pandemic Becoming Endemic",
      tags: {
        first: "covid-19",
        second: "health",
      },
    },
    {
      id: 2,
      image: SecondCard,
      text: "Eps. 5",
      title: "Tesla Autopilot Controversy",
      tags: {
        first: "automation",
        second: "tech",
      },
    },
    {
      id: 3,
      image: ThirdCard,
      text: "Eps. 4",
      title: "Women is Rights? Is it alright?",
      tags: {
        first: "women’s rights",
        second: "wealth",
      },
    },
    {
      id: 4,
      image: FourthCard,
      text: "Eps. 3",
      title: "How to Deal with Self–Confidence",
      tags: {
        first: "self-esteem",
        second: "health",
      },
    },
    {
      id: 5,
      image: FifthCard,
      text: "Eps. 2",
      title: "Type of Social Classes of People",
      tags: {
        first: "social class",
        second: "wealth",
      },
    },
    {
      id: 6,
      image: SixthCard,
      text: "Eps. 1",
      title: "Are you a Perplexed Mind Person?",
      tags: {
        first: "mind-behaviour",
        second: "health",
      },
    },
  ];
  return (
    <div className={style.episodes}>
      <div className="container">
        <h1>Recent Episodes</h1>
        <h3>Available on your favorite platform</h3>
        <div className={style.cards_content}>
          {cards.map((card) => (
            <div className={style.card} key={card.id}>
              <div className={style.card_elements}>
                <div className={style.image}>
                  <img src={card.image} alt="img" />
                </div>
                <div className={style.card_texts}>
                  <p className={style.card_esp}>{card.text}</p>
                  <h3 className={style.card_title}>{card.title}</h3>
                  <hr />
                  <p className={style.card_lorem}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur ac ultrices odio.{" "}
                  </p>
                </div>
              </div>
              <div className={style.bottom_content}>
                <div className={style.card_buttons}>
                  <p>{card.tags.first}</p>
                  <p>{card.tags.second}</p>
                </div>
                <div className={style.content_right}>
                  <p>Hosted by: </p>
                  <img src={Hosted} alt="Hosted" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={style.button}>
          <Button className={style.button_title}>BROWSE ALL EPISODES</Button>
        </div>
      </div>
    </div>
  );
};

export default Episodes;
