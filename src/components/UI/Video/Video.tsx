import Image from "next/image";
import m from "./Video.module.scss";
import VideoImg from "@/assets/images/Video.png";
import Play from "@/assets/icons/Play.svg";


const Video = () => {
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
      </div>
    </div>
  );
};

export default Video;
