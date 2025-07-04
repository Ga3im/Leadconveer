import { useState } from "react";
import s from "./Video.module.css";

export const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <>
      <div className={s.content}>
        <div className={s.titleContent}>
          <h1 className={s.title}>
            Мы подготовили для вас <br /> видео-презентацию
            <span className={s.spancolor}>нашей работы</span>
          </h1>
          <img src="video-camera.png" alt="" />
        </div>
        <div className={s.videoContent}>
          {isPlaying ? (
            <div className={s.pause} onClick={() => setIsPlaying(!isPlaying)}>
              <div className={s.leftItem}></div>
              <div className={s.rightItem}></div>
            </div>
          ) : (
            <div
              onClick={() => setIsPlaying(!isPlaying)}
              className={s.play}
            ></div>
          )}
        </div>
      </div>
    </>
  );
};
