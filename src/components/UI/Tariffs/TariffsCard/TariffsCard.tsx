import { FC } from "react";
import m from "./TariffsCard.module.scss";
import Image from "next/image";
import Lug from "@/assets/icons/Lug.svg";

type TProps = {
  day: number;
  price: number;
};

const TariffsCard: FC<TProps> = ({ day, price }) => {
  return (
    <div className={m.container}>
      <div className={m.wrapper}>
        <div className={m.textWrapper}>
          <h3 className={m.days}>{`${day} ${day >= 2 ? "дней" : "день"}`}</h3>
          <span className={m.price}>{`${price} рублей`}</span>
        </div>
        <button className={m.paymentBtn}>
          <Image src={Lug} alt="" />
          {"Оплатить"}
        </button>
      </div>
    </div>
  );
};

export default TariffsCard;
