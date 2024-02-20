import style from "./Membership.module.scss";
import Scribble from "../../assets/icons/MembershipIcons/scribble.svg";
import ShiningStars from "../../assets/icons/MembershipIcons/stars.svg";
import Face from "../../assets/icons/MembershipIcons//face.svg";
import Smile from "../../assets/icons/MembershipIcons/smile.svg";
import Fire from "../../assets/icons/MembershipIcons/fire.svg";
import Star from "../../assets/icons/MembershipIcons/star.svg";
import { Button } from "../../UI/Button";

const Membership = () => {
  const data = [
    {
      image: Scribble,
      title: "Topic by Request",
      id: 1,
    },
    {
      image: ShiningStars,
      title: "Exclusive Content",
      id: 2,
    },
    {
      image: Face,
      title: "Join the Community",
      id: 3,
    },
    {
      image: Smile,
      title: "Livestreaming Access",
      id: 4,
    },
    {
      image: Fire,
      title: "Exclusive Episodes & Merch",
      id: 5,
    },
    {
      image: Star,
      title: "And much more!",
      id: 6,
    },
  ];
  return (
    <div className={style.membership}>
      <div className="container">
        <h1>Membership benefits</h1>
        <h3>Become our sponsor and get all benefits</h3>
        <div className={style.cards_content}>
          {data.map((card) => (
            <div key={card.id} className={style.card}>
              <img src={card.image} alt="img" />
              <h4 className={style.card_title}>{card.title}</h4>
              <p className={style.card_description}>
                Lorem ipsum dolor sit amet consectet pis cing elit, sed do
                eiusmod tempor.
              </p>
            </div>
          ))}
        </div>
        <div className={style.button}>
          <Button className={style.button_style}>SEE PRICING</Button>
        </div>
      </div>
    </div>
  );
};

export default Membership;
