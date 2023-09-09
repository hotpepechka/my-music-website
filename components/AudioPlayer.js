import { useEffect, useRef, useState } from 'react';

const AudioPlayer = ({ src }) => {
  const audioRef = useRef(null);
  const [showPlayButton, setShowPlayButton] = useState(true);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setShowPlayButton(false); // После воспроизведения скрываем кнопку
      openFullscreen(); // Вызываем функцию для открытия полноэкранного режима
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
    } else if (elem.mozRequestFullScreen) { // Firefox
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { // Chrome, Safari и Opera
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { // IE/Edge
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
      <audio ref={audioRef} autoPlay loop />
    </div>
  );
};

export default AudioPlayer;
