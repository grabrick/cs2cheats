import { FC, useState } from "react";
import m from "./Issue.module.scss";
import ArrowDown from "@/assets/icons/ArrowDown.svg";
import ArrowTop from "@/assets/icons/ArrowTop.svg";
import Image from "next/image";

type TProps = {
  preview: string;
  text: string;
};

const Issue: FC<TProps> = ({ preview, text }) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <div className={m.container}>
      <div className={m.previewWrapper} onClick={() => setIsActive(!isActive)}>
        <h1 className={m.preview}>{preview}</h1>
        <Image className={isActive !== true ? m.static : m.active} src={isActive === true ? ArrowTop : ArrowDown} alt="" />
      </div>
      {isActive === true && <p className={m.text}>{text}</p>}
    </div>
  );
};

export default Issue;
