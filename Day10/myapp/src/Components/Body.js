// HomeBody.js
import React, { useState, useRef } from 'react';
import '../Assessts/css/body.css';
import Img1 from '../Assessts/images/ab.jpg';
import Img2 from '../Assessts/images/jol.jpg';
import Img3 from '../Assessts/images/leo.jpg';
import Aud1 from '../Assessts/images/Arabic-Kuthu.mp3';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import '../Assessts/css/music.css';

const HomeBody = () => {
  const [audioSrc, setAudioSrc] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const playAudio = (audioSource) => {
    setAudioSrc(audioSource);
    const audio = new Audio(audioSource);
    audioRef.current = audio;

    audio.addEventListener('ended', () => {
      setIsPlaying(false);
    });

    audio.play();
    setIsPlaying(true);
  };

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div>
      <main>
        <section className="book-list">
          <div className="book">
            <div className="card" onClick={() => (isPlaying ? pauseAudio() : playAudio(Aud1))}>
              <img src={Img1} alt="Book One" />
            </div>
            <p className="description">Movie Name: Beast{'\n'}Music Director: Anirudh{'\n'}</p>
          </div>

          <div className="book">
            <div className="card">
              <img src={Img2} alt="Book Two" />
            </div>
            <p className="description">Movie Name: Beast{'\n'}Music Director: Anirudh{'\n'}</p>
          </div>

          <div className="book">
            <div className="card">
              <img src={Img3} alt="Book Three" />
            </div>
            <p className="description">Movie Name : Leo {'\n'}Music Director : Anirudh {'\n'}</p>
          </div>
        </section>

        {audioSrc && (
          <div className="music-player-container">
            <div className={`music-player ${isPlaying ? 'playing' : ''}`}>
              <button className="play-pause-btn" onClick={() => (isPlaying ? pauseAudio() : playAudio(Aud1))}>
                {isPlaying ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
              </button>
              <div className="track-display">Now Playing: Your Song</div>
              <audio ref={audioRef} src={audioSrc} autoPlay />
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default HomeBody;
