import { useEffect, useRef, useState } from 'react';

const AudioPlayer = ({ src }) => {
  const audioRef = useRef(null);
  const [showPlayButton, setShowPlayButton] = useState(true);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setShowPlayButton(false); // После воспроизведения скрываем кнопку
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = src;
    }
  }, [src]);

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
