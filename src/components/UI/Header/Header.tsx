import Image from "next/image";
import m from "./Header.module.scss";
import Logo from "@/assets/icons/LogoWhite.svg";
import List from "@/assets/icons/List.svg";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import { useState } from "react";

const Header = () => {
  const [isActive, setIsActive] = useState<boolean>(false)
  return (
    <header className={m.container}>
      <div className={m.wrapper}>
        <div className={m.logo}>
          <Image className={m.img} src={Logo} alt="" />
          <h1 className={m.title}>CS2 Cheat</h1>
        </div>
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
        <Image
          onClick={() => setIsActive(true)}
          className={m.burgerMenu}
          width={40}
          height={40}
          src={List}
          alt=""
        />
      </div>
      {isActive && <BurgerMenu setIsActive={setIsActive} isActive={isActive} />}
    </header>
  );
};

export default Header;
