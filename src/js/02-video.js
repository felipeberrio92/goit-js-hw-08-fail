import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
const player = new Vimeo.Player(iframe);

const saveCurrentTime = throttle(function (time) {
    localStorage.setItem('videoplayer-current-time', time);
  }, 1000);
  
  player.on('timeupdate', function (data) {
    const currentTime = data.seconds;
    saveCurrentTime(currentTime);
  });

  player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);

