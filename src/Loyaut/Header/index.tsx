import style from "./Header.module.scss";
import logo from "../../assets/icons//HeaderIcons/headerLogo.svg";
import { Button } from "../../UI/Button";
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  const notFound = false;
  const isActive = false;
  const setActive = (isActive: boolean) => (isActive ? style.active : "");
  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.header_content}>
          <img className={style.logo} src={logo} alt="logo" />
          <nav>
            <NavLink to="/">Episodes</NavLink>
            <NavLink to="/about" className={setActive(isActive)}>
              About
            </NavLink>
            {notFound && <Link to="/notFound" />}

            <label>
              More
              <select></select>
            </label>
          </nav>
          <div className={style.button}>
            <Button className={style.button_resent}>RECENT EPISODES</Button>
            <Button className={style.button_subscribe}>SUBSCRIBE</Button>
          </div>
        </div>
      </div>
    </header>
  );
};
