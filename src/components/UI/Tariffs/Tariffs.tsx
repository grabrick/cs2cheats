import m from "./Tariffs.module.scss";
import TariffsCard from "./TariffsCard/TariffsCard";

const Tariffs = () => {
  const data = [
    { id: 0, day: 1, price: 50 },
    { id: 1, day: 7, price: 150 },
    { id: 2, day: 30, price: 300 },
  ];
  return (
    <div className={m.container}>
      <div className={m.wrapper}>
        <h1 className={m.title}>Тарифный план</h1>
        <div className={m.content}>
          {data.map((items) => (
            <TariffsCard key={items.id} day={items.day} price={items.price} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tariffs;
