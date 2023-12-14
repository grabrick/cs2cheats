import Image from "next/image";
import m from "./Main.module.scss";
import Man from "@/assets/images/Man.png";
import { motion } from "framer-motion";

const Main = () => {
  const animationVariantsR = {
    hidden: { opacity: 0, x: "50%" },
    visible: { opacity: 1, x: 0 },
  };
  const animationVariantsL = {
    hidden: { opacity: 0, x: "-50%" },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className={m.container}>
      <div className={m.wrapper}>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={animationVariantsL}
          transition={{ duration: 0.5, delay: 0.10 }}
          className={m.img}
        >
          <Image className={m.img} src={Man} alt="" />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={animationVariantsR}
          transition={{ duration: 0.5 }}
          className={m.textWraper}
        >
          <h1 className={m.title}>CS2Cheats</h1>
          <p className={m.text}>
            Цифровой магазин высококачественных читов для игр Наверняка вы
            хотите быть победителем и никогда не проигрывать?
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Main;
