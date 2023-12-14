import { useInView } from "react-intersection-observer";
import m from "./Tariffs.module.scss";
import TariffsCard from "./TariffsCard/TariffsCard";
import { motion } from "framer-motion";

const Tariffs = () => {
  const [ref, inView] = useInView({
    triggerOnce: false, // чтобы анимация происходила только один раз
  });
  const animationVariants = {
    hidden: { opacity: 0, y: "-20%" },
    visible: { opacity: 1, y: 0 },
  };
  const data = [
    { id: 0, day: 1, price: 50 },
    { id: 1, day: 7, price: 150 },
    { id: 2, day: 30, price: 300 },
  ];
  return (
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
        <h1 className={m.title}>Тарифный план</h1>
        <div className={m.content}>
          {data.map((items) => (
            <TariffsCard key={items.id} day={items.day} price={items.price} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Tariffs;
