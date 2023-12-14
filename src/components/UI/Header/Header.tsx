import Image from "next/image";
import m from "./Header.module.scss";
import Logo from "@/assets/icons/LogoWhite.svg";
import List from "@/assets/icons/List.svg";

const Header = () => {
  return (
    <header className={m.container}>
      <div className={m.wrapper}>
        <div className={m.logo}>
          <Image className={m.img} src={Logo} alt="" />
          <h1 className={m.title}>CS2 Cheat</h1>
        </div>
        <div className={m.buttonWrapper}>
          <span className={m.button}>Преимущества</span>
          <span className={m.button}>Предпросмотр</span>
          <span className={m.button}>Скриншоты и видео</span>
          <span className={m.button}>Функционал</span>
          <span className={m.button}>Тарифы и оплата</span>
          <span className={m.button}>FAQ</span>
        </div>
        <Image
          className={m.burgerMenu}
          width={40}
          height={40}
          src={List}
          alt=""
        />
      </div>
    </header>
  );
};

export default Header;
