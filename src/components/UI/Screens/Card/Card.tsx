import { FC } from "react";
import m from "./Card.module.scss";
import Image, { StaticImageData } from "next/image";

type TProps = {
  img: {
    url: StaticImageData | any;
    isVideo: boolean;
  };
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
            {img.isVideo === true ? (
              <video className={m.video} autoPlay loop>
                <source src={img.url} />
              </video>
            ) : (
              <Image className={m.img} src={img.url} alt="" />
            )}
          </div>
        ) : (
          <div className={m.elementWrapper}>
            {img.isVideo === true ? (
              <video className={m.video} autoPlay loop>
                <source src={img.url} />
              </video>
            ) : (
              <Image className={m.img} src={img.url} alt="" />
            )}
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
