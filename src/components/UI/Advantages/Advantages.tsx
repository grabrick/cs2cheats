import m from "./Advantages.module.scss";
import Info from "@/assets/icons/Info.svg";
import Cog from "@/assets/icons/Cog.svg";
import Certificate from "@/assets/icons/Certificate.svg";
import Chip from "@/assets/icons/Chip.svg";
import Package from "@/assets/icons/Package.svg";
import Tags from "./Tags/Tags";
import Image from "next/image";
import Logo from "@/assets/icons/LogoWhite.svg";

const Advantages = () => {
  const tagsData = [
    { id: 0, img: Info, text: "Строгий контроль нашей продукции" },
    { id: 1, img: Cog, text: "Мы следим за актуальностью нашей продукции" },
    { id: 2, img: Certificate, text: "Наша продукция сертифицирована" },
    { id: 3, img: Chip, text: "Поддержка всех видов OS" },
    { id: 4, img: Package, text: "Каждая продукция устанавливается без лишних проблем" },
  ];

  return (
    <div className={m.container}>
      <div className={m.wrapper}>
        <h1 className={m.title}>Наши преимущества</h1>
        <div className={m.tagsWrapper}>
          <div className={m.leftBar}>
            {tagsData.slice(0, 2).map((items) => (
              <Tags key={items.id} img={items.img} text={items.text} />
            ))}
          </div>
          <div className={m.center}>
            <Image className={m.img} src={Logo} alt="" />
            {tagsData.slice(2, 3).map((items) => (
              <Tags key={items.id} img={items.img} text={items.text} />
            ))}
          </div>
          <div className={m.rightBar}>
            {tagsData.slice(3, 5).map((items) => (
              <Tags key={items.id} img={items.img} text={items.text} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
