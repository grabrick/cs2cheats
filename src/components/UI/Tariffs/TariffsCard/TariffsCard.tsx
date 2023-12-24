import { FC } from "react";
import m from "./TariffsCard.module.scss";
import Image from "next/image";
import Lug from "@/assets/icons/Lug.svg";
import Link from "next/link";

type TProps = {
  day: number;
  price: number;
  url: string
};

const TariffsCard: FC<TProps> = ({ day, price, url }) => {
  return (
    <div className={m.container}>
      <div className={m.wrapper}>
        <div className={m.textWrapper}>
          <h3 className={m.days}>{`${day} ${day >= 2 ? "дней" : "день"}`}</h3>
          <span className={m.price}>{`${price} рублей`}</span>
        </div>
        <Link className={m.paymentBtn} href={url} target="_blank">
          <Image src={Lug} alt="" />
          {"Оплатить"}
        </Link>
      </div>
    </div>
  );
};

export default TariffsCard;
