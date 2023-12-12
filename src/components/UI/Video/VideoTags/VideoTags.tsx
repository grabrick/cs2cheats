import { FC } from 'react';
import m from './VideoTags.module.scss';
import Image from 'next/image';

type TProps = {
  icons: string,
  text: string,
}

const VideoTags:FC<TProps> = ({ icons, text }) => {
  return (
    <div className={m.container}>
      <div className={m.wrapper}>
        <div className={m.iconsWrapper}>
          <Image width={40} height={40} src={icons} alt='' />
        </div>
        <h2 className={m.text}>{text}</h2>
      </div>
    </div>
  )
}

export default VideoTags;