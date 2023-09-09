import { useEffect, useRef, useState } from 'react';

const AudioPlayer = ({ src }) => {
  const audioRef = useRef(null);
  const [showPlayButton, setShowPlayButton] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [imageSrc, setImageSrc] = useState('photo/photo.jpeg');

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setShowPlayButton(false);
      setIsPlaying(true);
      openFullscreen();
      setImageSrc('photo/shai.gif');
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = src;
    }
  }, [src]);

  const openFullscreen = () => {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }
  };

  return (
    <div className="play-button-container">
      {showPlayButton && (
        <button onClick={handlePlay} className="play-button">
          <span className="play-icon">&#9654;</span>
        </button>
      )}
      <img
        src={imageSrc}
        alt="Background"
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '101vw',
          height: '110vh',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -1,
          margin: -20,
        }}
      />
      <audio ref={audioRef} autoPlay loop />
    </div>
  );
};

export default AudioPlayer;
