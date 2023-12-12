import Image from "next/image";
import PreviewImg from "@/assets/images/cs2.gif";
import m from "./Func.module.scss";
import Tags from "./Tags/Tags";
import GamePlayMoment from "./GamePlayMoment/GamePlayMoment";
import Raskid from "@/assets/images/raskid.gif";
import Visual from "@/assets/images/csinon.gif"

const Func = () => {
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
          id: 0,
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
          id: 0,
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
            "Система сохранения настроек (можно иметь несколько конфигов)",
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
    <div className={m.container}>
      <div className={m.wrapper}>
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
      </div>
    </div>
  );
};

export default Func;
