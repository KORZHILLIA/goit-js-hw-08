import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const videoContainer = document.querySelector('#vimeo-player');
const player = new Player(videoContainer);
const currentPlayTime = localStorage.getItem('videoplayer-current-time') || 0;

player.on('timeupdate', throttle(playTimeMemoriser, 1000));

player.setCurrentTime(currentPlayTime);

function playTimeMemoriser({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
}
