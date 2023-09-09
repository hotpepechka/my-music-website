import { useEffect } from 'react';
import Head from 'next/head';
import AudioPlayer from '@/components/AudioPlayer';

const Home = () => {
  useEffect(() => {
    const confirmExit = (e) => {
      // Пользовательская строка сообщения при попытке закрыть окно или вкладку
      const confirmationMessage = 'ШАЙЛУШАЙ?';

      // Добавляем пользовательское сообщение только в том случае,
      // если пользователь не отменил действие (например, кликнул на кнопку "Отмена")
      e.returnValue = confirmationMessage;
      return confirmationMessage;
    };

    // Добавляем обработчик события beforeunload при монтировании компонента
    window.addEventListener('beforeunload', confirmExit);

    // Удаляем обработчик события beforeunload при размонтировании компонента
    return () => {
      window.removeEventListener('beforeunload', confirmExit);
    };
  }, []);

  return (
    <div>
      <Head>
        <title>SHAILUSHAI</title>
      </Head>

      {/* Изображение на весь экран */}
      <div
       
      />

      {/* Компонент воспроизведения музыки */}
      <AudioPlayer src="https://mob.mobileringtone.online/mp3/mobileringtone.online_alan-walker-spectre.mp3" />
    </div>
  );
};

export default Home;
