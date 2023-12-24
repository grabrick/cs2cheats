import m from "./Advantages.module.scss";
import Info from "@/assets/icons/Info.svg";
import Cog from "@/assets/icons/Cog.svg";
import Certificate from "@/assets/icons/Certificate.svg";
import Chip from "@/assets/icons/Chip.svg";
import Package from "@/assets/icons/Package.svg";
import Tags from "./Tags/Tags";
import Image from "next/image";
import Logo from "@/assets/icons/LogoWhite.svg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Element } from "react-scroll";

const Advantages = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // чтобы анимация происходила только один раз
  });
  
  const tagsData = [
    { id: 0, img: Info, text: "Строгий контроль нашей продукции" },
    { id: 1, img: Cog, text: "Мы следим за актуальностью нашей продукции" },
    { id: 2, img: Certificate, text: "Наша продукция сертифицирована" },
    { id: 3, img: Chip, text: "Поддержка всех видов OS" },
    {
      id: 4,
      img: Package,
      text: "Каждая продукция устанавливается без лишних проблем",
    },
  ];
  const animationVariants = {
    hidden: { opacity: 0, y: "-20%" },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Element name="Advantages">
      <div className={m.container}>
        <motion.div
          ref={ref}
          initial="hidden"
          whileInView="visible"
          animate={inView ? "visible" : "hidden"}
          variants={animationVariants}
          transition={{ duration: 1, delay: 0.5 }}
          className={m.wrapper}
        >
          <h1 className={m.title}>Наши преимущества</h1>
          <div className={m.tagsWrapper}>
            <div className={m.leftBar}>
              {tagsData.slice(0, 2).map((items: any) => (
                <Tags key={items.id} img={items.img} text={items.text} />
              ))}
            </div>
            <div className={m.center}>
              <Image className={m.img} src={Logo} alt="" />
              {tagsData.slice(2, 3).map((items: any) => (
                <Tags key={items.id} img={items.img} text={items.text} />
              ))}
            </div>
            <div className={m.rightBar}>
              {tagsData.slice(3, 5).map((items: any) => (
                <Tags key={items.id} img={items.img} text={items.text} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Element>
  );
};

export default Advantages;
