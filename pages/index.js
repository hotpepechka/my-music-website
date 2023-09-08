import Head from 'next/head';
import AudioPlayer from '@/components/AudioPlayer';

const Home = () => {
  return (
    <div>
      <Head>
        <title>SHAILUSHAI</title>
      </Head>

      {/* Изображение на весь экран */}
      <div
        style={{
          backgroundImage: 'url("photo/photo.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100vw',
          height: '100vh',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -1,

          
        }}
        
      />

      {/* Компонент воспроизведения музыки */}
      <AudioPlayer  src="https://mob.mobileringtone.online/mp3/mobileringtone.online_alan-walker-spectre.mp3" />
      
    </div>
  );
};

export default Home;
