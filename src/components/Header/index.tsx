import style from "./Header.module.scss";
import logo from "../../assets/icons/headerLogo.svg";
import { ReactComponent as MoreButton } from "../../assets/icons/headerMore.svg";
import { Button } from "../../UI/Button";

export const Header = () => {
  return (
    <header className={style.header}>
      <div className="container">
        <img src={logo} alt="logo" />
        <nav>
          <ul>
            <li>
              <a href="">Episodes</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">More</a>
              <button>
                <MoreButton />
              </button>
            </li>
          </ul>
        </nav>
        <div>
          <Button>RECENT EPISODES</Button>
          <Button>SUBSCRIBE</Button>
        </div>
      </div>
    </header>
  );
};
