import { Link } from "react-scroll";
import m from "./BurgerMenu.module.scss";
import { FC } from "react";

type TProps = {
  setIsActive: (value: boolean) => void,
  isActive: boolean
}

const BurgerMenu:FC<TProps> = ({ setIsActive, isActive }) => {
  return (
    <div className={isActive === true ? m.containerActive : m.contauner} onClick={() => setIsActive(false)}>
      <div className={m.wrapper} onClick={(e) => e.stopPropagation()}>
        <div className={m.buttonWrapper}>
          <Link
            to="Advantages"
            smooth={true}
            duration={500}
            className={m.button}
          >
            Преимущества
          </Link>
          <Link to="Screens" smooth={true} duration={500} className={m.button}>
            Предпросмотр
          </Link>
          <Link to="Video" smooth={true} duration={500} className={m.button}>
            Скриншоты и видео
          </Link>
          <Link to="Func" smooth={true} duration={500} className={m.button}>
            Функционал
          </Link>
          <Link to="Tariffs" smooth={true} duration={500} className={m.button}>
            Тарифы и оплата
          </Link>
          <Link to="Faq" smooth={true} duration={500} className={m.button}>
            FAQ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
