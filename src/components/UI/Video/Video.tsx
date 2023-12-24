import Image from "next/image";
import m from "./Video.module.scss";
import Play from "@/assets/icons/Play.svg";
import Package from "@/assets/icons/Package.svg";
import MagicWand from "@/assets/icons/MagicWand.svg";
import Speedometer from "@/assets/icons/Speedometer.svg";
import BankNote from "@/assets/icons/BankNote.svg";
import VideoTags from "./VideoTags/VideoTags";
import Logo from "@/assets/icons/LogoWhite.svg";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Element } from "react-scroll";

const Video = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // чтобы анимация происходила только один раз
  });
  const animationVariants = {
    hidden: { opacity: 0, y: "-20%" },
    visible: { opacity: 1, y: 0 },
  };
  const data = [
    { id: 0, icons: Package, text: "Простая установка" },
    { id: 1, icons: MagicWand, text: "Гибкая настройка функционала" },
    { id: 2, icons: BankNote, text: "Низкая цена" },
    { id: 3, icons: Speedometer, text: "Высокая производительность" },
  ];
  const Url = "https://www.youtube.com/watch?v=1RHjcWkWDpI";
  const [isActive, setIsActive] = useState<boolean>(false);
  const [hasWindow, setHasWindow] = useState<boolean>(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  return (
    <Element name="Video">
      <div className={m.container}>
        <motion.div
          ref={ref}
          initial="hidden"
          whileInView="visible"
          animate={inView ? "visible" : "hidden"}
          variants={animationVariants}
          transition={{ duration: 1, delay: 0.5 }}
          className={m.wrapper}
        >
          <div className={m.videoContainer}>
            <div className={m.image}>
              {hasWindow && (
                <VideoPlayer
                  videoUrl={Url}
                  isActive={isActive}
                  setIsActive={setIsActive}
                />
              )}
            </div>

            {isActive === false && (
              <div className={m.overlay} onClick={() => setIsActive(true)}>
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
            )}
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
                {data.slice(0, 2).map((items) => (
                  <VideoTags
                    key={items.id}
                    icons={items.icons}
                    text={items.text}
                  />
                ))}
              </div>
              <div className={m.center}>
                <Image src={Logo} alt="" />
              </div>
              <div className={m.rightBar}>
                {data.slice(2, 4).map((items) => (
                  <VideoTags
                    key={items.id}
                    icons={items.icons}
                    text={items.text}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Element>
  );
};

export default Video;
