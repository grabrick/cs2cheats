import Image from "next/image";
import m from "./Video.module.scss";
import VideoImg from "@/assets/images/Video.png";
import Play from "@/assets/icons/Play.svg";
import Package from '@/assets/icons/Package.svg'
import MagicWand from '@/assets/icons/MagicWand.svg'
import Speedometer from '@/assets/icons/Speedometer.svg'
import BankNote from '@/assets/icons/BankNote.svg'
import VideoTags from "./VideoTags/VideoTags";
import Logo from '@/assets/icons/LogoWhite.svg'

const Video = () => {
  const data = [
    { id: 0, icons: Package, text: 'Простая установка' },
    { id: 1, icons: MagicWand, text: 'Гибкая настройка функционала' },
    { id: 2, icons: BankNote, text: 'Низкая цена' },
    { id: 3, icons: Speedometer, text: 'Высокая производительность' },
    
  ]
  return (
    <div className={m.container}>
      <div className={m.wrapper}>
        <div className={m.videoContainer}>
          <Image className={m.image} src={VideoImg} alt="" />
          <div className={m.overlay}>
            <div className={m.gameOverlay}>
              <h2 className={m.title}>COUNTER - STRIKE 2</h2>
              <div className={m.subTitleWrapper}>
                <p className={m.subTitle}>Игра за пределами понимания</p>
              </div>
            </div>
            <div className={m.playButtonWrapper}>
              <div className={m.icons}>
                <Image className={m.img} src={Play} alt="" />
              </div>
              <h2 className={m.buttonText}>Воспроизвести</h2>
            </div>
          </div>
        </div>
        <div className={m.videoTextWrapper}>
          <div className={m.textWrapper}>
            <h1 className={m.videoTitle}>CS2Cheats</h1>
            <h4 className={m.videoText}>
              Наша продукция не даст вам заскучать во время игры
            </h4>
          </div>
          <div className={m.tags}>
            <div className={m.leftBar}>
              {data.slice(0, 2).map(items => <VideoTags key={items.id} icons={items.icons} text={items.text}  />)}
            </div>
            <div className={m.center}>
              <Image src={Logo} alt=""  />
            </div>
            <div className={m.rightBar}>
              {data.slice(2, 4).map(items => <VideoTags key={items.id} icons={items.icons} text={items.text}  />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
