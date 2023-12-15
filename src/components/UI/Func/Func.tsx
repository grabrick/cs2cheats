import Image from "next/image";
import PreviewImg from "@/assets/images/cs2.gif";
import m from "./Func.module.scss";
import Tags from "./Tags/Tags";
import GamePlayMoment from "./GamePlayMoment/GamePlayMoment";
import Raskid from "@/assets/images/raskid.gif";
import Visual from "@/assets/images/csinon.gif";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Element } from "react-scroll";

const Func = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // чтобы анимация происходила только один раз
  });
  const animationVariants = {
    hidden: { opacity: 0, y: "20%" },
    visible: { opacity: 1, y: 0 },
  };
  const data = [
    {
      sectionAIM: [
        {
          id: 0,
          title: "Aimbot",
          tags: [
            "Радиус",
            "Скорость",
            "Задержка после убийства",
            "Мультивыбор костей",
            "Контроль отдачи",
            "Задержка перед выстрелом",
            "Игнорирование цель если  игрок ослеплен",
            "Игнорирование цель за смоком",
          ],
        },
      ],
      sectionVISUAL: [
        {
          id: 1,
          title: "Visual",
          tags: [
            "2Д боксы",
            "Скелеты",
            "Здоровье",
            "Имена",
            "Оружие в руках",
            "Направление взгляда",
            "Линия до игрока",
            "Брошенные гранаты (НЕ дропнутые)",
            "Дифуза на земле",
            "Установленная бомба",
          ],
        },
      ],
      sectionMISC: [
        {
          id: 2,
          title: "Misc",
          tags: [
            "Список игроков которые наблюдают за вами",
            "Прицел который следует за отдачей",
            "Ночной мод",
            "Антифлеш",
            "Радар",
            "Размер радара",
            "Угол радара",
            "Размер точки на радаре",
            "Система сохранения настроек",
            "Настройка цветов",
          ],
        },
      ],
    },
  ];
  const playData = [
    {
      id: 0,
      img: Raskid,
      title: "Поддержка раскидок для всех карт ",
      reverse: false,
      text: "Мы добавили раскидки для кс 2, и возможность каждому желающему сделать свою и поделится с нами, чтобы мы добавили их в чит. С помощью раскидок вы их можете выучить для себя и использовать без читов или не заморачиваться и всегда по мимо уничтожения врагов делать хоть что то полезное для команды и получить за это респект тимейтов. ",
    },
    {
      id: 1,
      img: Visual,
      title: "Кастомные визуалы на оружие",
      reverse: true,
      text: "Мы добавили раскидки для кс 2, и возможность каждому желающему сделать свою и поделится с нами, чтобы мы добавили их в чит. С помощью раскидок вы их можете выучить для себя и использовать без читов или не заморачиваться и всегда по мимо уничтожения врагов делать хоть что то полезное для команды и получить за это респект тимейтов. ",
    },
  ];
  return (
    <Element name="Func">
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
          <div className={m.titleWrapper}>
            <h1 className={m.title}>Функционал нашей продукции</h1>
            <span className={m.subTitle}>Выбор за тобой</span>
          </div>
          <div className={m.content}>
            <div className={m.cheatImgWrapper}>
              <Image className={m.image} src={PreviewImg} alt="" />
              <div className={m.textWrapper}>
                <div className={m.section}>
                  <p className={m.clases}>Статус - undetect</p>
                </div>
                <div className={m.section}>
                  <p className={m.clases}>Тип - Мультихак</p>
                </div>
                <div className={m.section}>
                  <p className={m.clases}>OS - Windows 10-11 от 2004 и выше</p>
                </div>
              </div>
            </div>
            <div className={m.tagsWrapper}>
              {data.map((items, i) => (
                <Tags key={i} section={items.sectionAIM} />
              ))}
              {data.map((items, i) => (
                <Tags key={i} section={items.sectionMISC} />
              ))}
              {data.map((items, i) => (
                <Tags key={i} section={items.sectionVISUAL} />
              ))}
            </div>
            <div className={m.gamePlayWrapper}>
              {playData.map((items) => (
                <GamePlayMoment
                  key={items.id}
                  img={items.img}
                  title={items.title}
                  text={items.text}
                  reverse={items.reverse}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Element>
  );
};

export default Func;
