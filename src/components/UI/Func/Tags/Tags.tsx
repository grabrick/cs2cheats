import { FC } from "react";
import m from "./Tags.module.scss";

type TProps = {
  section: any;
};

const Tags: FC<TProps> = ({ section }) => {
  return (
    <div className={m.container}>
      <div className={m.wrapper}>
        <h3 className={m.title}>{section[0].title}</h3>
        <div className={m.content}>
          {section[0].tags.map((items: any) => (
            <div className={m.tagsWrapper} key={items}>
              <p className={m.tagsText}>{items}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tags;
