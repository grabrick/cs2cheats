import { FC } from "react";
import m from "./Card.module.scss";
import Image, { StaticImageData } from "next/image";

type TProps = {
  img: StaticImageData;
  title: string;
  text: string;
  reverse: boolean;
};

const Card: FC<TProps> = ({ img, title, text, reverse }) => {
  return (
    <div className={m.container}>
      <div className={m.wrapper}>
        {reverse === true ? (
          <div className={m.reverseWrapper}>
            <div className={m.textWrapper}>
              <h1 className={m.title}>{title}</h1>
              <p className={m.text}>{text}</p>
            </div>
            <Image src={img} alt="" />
          </div>
        ) : (
          <div className={m.elementWrapper}>
            <Image src={img} alt="" />
            <div className={m.textWrapper}>
              <h1 className={m.title}>{title}</h1>
              <p className={m.text}>{text}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
