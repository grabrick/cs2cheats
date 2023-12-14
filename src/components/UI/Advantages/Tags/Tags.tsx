import { FC } from "react";
import m from "./Tags.module.scss";
import Image from "next/image";

type TProps = {
  img: string;
  text: string;
};

const Tags: FC<TProps> = ({ img, text }) => {
  return (
    <div className={m.container}>
      <div className={m.wrapper}>
        <div className={m.icons}>
          <Image className={m.img} src={img} alt="" />
        </div>
        <p className={m.text}>{text}</p>
      </div>
    </div>
  );
};

export default Tags;
