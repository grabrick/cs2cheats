import { FC } from "react";
import m from "./GamePlayMoment.module.scss";
import Image, { StaticImageData } from "next/image";

type TProps = {
  img: StaticImageData | string;
  title: string;
  text: string;
  reverse: boolean;
};

const GamePlayMoment: FC<TProps> = ({ img, title, text, reverse }) => {
  return (
    <div className={m.container}>
      {reverse === true ? (
        <div className={m.content}>
          <div className={m.textWrapper}>
            <h1 className={m.title}>{title}</h1>
            <p className={m.text}>{text}</p>
          </div>
          <Image width={450} height={300} src={img} alt="" />
        </div>
      ) : (
        <div className={m.content}>
          <Image width={221} height={337} src={img} alt="" />
          <div className={m.textWrapper}>
            <h1 className={m.title}>{title}</h1>
            <p className={m.text}>{text}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GamePlayMoment;
