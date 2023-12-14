import ReactPlayer from 'react-player';
import m from './VideoPlayer.module.scss'
import { FC } from 'react';

type TProps = {
  videoUrl: string,
  isActive: boolean, 
  setIsActive: (value: boolean) => void
}

const VideoPlayer:FC<TProps> = ({ videoUrl, isActive, setIsActive }) => {
  return (
    <div className={m.container}>
      <ReactPlayer
        url={videoUrl}
        width="100%"
        height="100%"
        controls={true}
        onEnded={() => setIsActive(false)}
        config={{
          youtube: {
            playerVars: {
              showinfo: 0,
              volume: 0.5,
            },
          },
        }}
      />
    </div>
  )
}

export default VideoPlayer;