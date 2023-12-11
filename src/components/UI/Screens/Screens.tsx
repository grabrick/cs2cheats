import Card from "./Card/Card";
import m from "./Screens.module.scss";
import Img from "@/assets/images/Img.png";

const Screens = () => {
  const data = [
    {
      id: 0,
      img: Img,
      title: "Игровой процесс",
      text: "Новый эффект дыма взаимодействует с другими элементами игры, открывая простор для новых тактик. Пули и гранаты разгоняют дым, расширяя завесу или ненадолго рассеивая её.",
      reverse: false,
    },
    {
      id: 1,
      img: Img,
      title: "Реакция на освещение",
      text: "Частицы дыма в Counter-Strike 2 работают с единой системой освещения, из-за чего реалистичнее влияют на свет и цвет.",
      reverse: true,
    },
    {
      id: 2,
      img: Img,
      title: "Естественное заполнение пространства",
      text: "Теперь дым будет расходиться через открытые двери и выбитые окна, спускаться и подниматься по лестницам, тянуться по коридорам и смешиваться с дымом от других гранат.",
      reverse: false,
    },
  ];

  return (
    <div className={m.container}>
      <div className={m.wrapper}>
        <div className={m.titleWrapper}>
          <h1 className={m.title}>РЕВОЛЮЦИОННОЕ ИЗМЕНЕНИЕ</h1>
          <h4 className={m.subTitle}>
            {`Для дымовых гранат теперь используются динамические объёмные
            частицы, которые взаимодействуют с окружением и реагируют на свет,
            выстрелы и взрывы.`}
          </h4>
        </div>
        <div className={m.cardWrapper}>
          {data.map((items) => (
            <Card
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
  );
};

export default Screens;